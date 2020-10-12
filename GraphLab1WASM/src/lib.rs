extern crate js_sys;
extern crate wasm_bindgen;
extern crate web_sys;
use js_sys::{Float32Array, WebAssembly};
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::WebGlRenderingContext;

#[allow(dead_code)]
mod utils;
use utils::{compile_shader, link_program, set_panic_hook};

#[wasm_bindgen(start)]
pub fn start() -> Result<(), JsValue> {
    set_panic_hook();

    Ok(())
}

#[allow(non_snake_case)]
#[wasm_bindgen]
pub fn render(
    points_arr: &JsValue,
    lines_arr: &JsValue,
    x_js: &JsValue,
    y_js: &JsValue,
) -> Result<(), JsValue> {
    /*============ Creating a canvas =================*/
    let document = web_sys::window().unwrap().document().unwrap();
    let canvas = document.get_element_by_id("graph-lab-canvas").unwrap();
    let canvas: web_sys::HtmlCanvasElement = canvas.dyn_into::<web_sys::HtmlCanvasElement>()?;

    let gl = canvas
        .get_context("webgl")?
        .unwrap()
        .dyn_into::<WebGlRenderingContext>()?;

    /*==========Defining and storing the geometry (from JS to Rust)=======*/

    let iterator =
        js_sys::try_iter(points_arr)?.ok_or_else(|| "need to pass iterable JS values!")?;
    let mut vertices_mut: Vec<f32> = vec![];
    for x in iterator {
        vertices_mut.push(x.unwrap().as_f64().unwrap() as f32);
    }
    let vertices: Vec<f32> = (*vertices_mut).to_vec();

    let vertices_array = {
        let memory_buffer = wasm_bindgen::memory()
            .dyn_into::<WebAssembly::Memory>()?
            .buffer();
        let location: u32 = vertices.as_ptr() as u32 / 4;
        Float32Array::new(&memory_buffer).subarray(location, location + vertices.len() as u32)
    };

    let iterator =
        js_sys::try_iter(lines_arr)?.ok_or_else(|| "need to pass iterable JS values!")?;
    let mut lines_mut: Vec<f32> = vec![];
    for x in iterator {
        lines_mut.push(x.unwrap().as_f64().unwrap() as f32);
    }
    let lines: Vec<f32> = (*lines_mut).to_vec();

    let lines_array = {
        let memory_buffer = wasm_bindgen::memory()
            .dyn_into::<WebAssembly::Memory>()?
            .buffer();
        let location: u32 = lines.as_ptr() as u32 / 4;
        Float32Array::new(&memory_buffer).subarray(location, location + lines.len() as u32)
    };



    // Create an empty buffer object to store the vertex buffer
    let  vertex_buffer = gl.create_buffer().ok_or("failed to create buffer")?;

    //Bind appropriate array buffer to it
    gl.bind_buffer(WebGlRenderingContext::ARRAY_BUFFER, Some(&vertex_buffer));

    // Pass the vertex data to the buffer
    gl.buffer_data_with_array_buffer_view(
        WebGlRenderingContext::ARRAY_BUFFER,
        &vertices_array,
        WebGlRenderingContext::STATIC_DRAW,
    );

    // Unbind the buffer
    gl.bind_buffer(WebGlRenderingContext::ARRAY_BUFFER, None);
    /*=========================Shaders========================*/

    // vertex shader source code
    let vertCode = r#"attribute vec3 aVertexPosition;
                           uniform mat4 uMVMatrix;

                           void main(void) {
                            gl_Position = uMVMatrix * vec4(aVertexPosition, 1.5);
                           }"#;
    // Create a vertex shader object
    let vertShader = compile_shader(&gl, WebGlRenderingContext::VERTEX_SHADER, vertCode)?;

    // fragment shader source code
    let fragCode = r#"precision highp float;
                            uniform vec3 fragColor;
                            void main(void) {
                            gl_FragColor = vec4(fragColor, 1.0);
                           }"#;
    // Create fragment shader object
    let fragShader = compile_shader(&gl, WebGlRenderingContext::FRAGMENT_SHADER, fragCode)?;
    // Link both programs
    let shaderProgram = link_program(&gl, &vertShader, &fragShader)?;
    // Use the combined shader program object
    gl.use_program(Some(&shaderProgram));

    /*======== Associating shaders to buffer objects ========*/

    //Bind appropriate array buffer to it
    gl.bind_buffer(WebGlRenderingContext::ARRAY_BUFFER, Some(&vertex_buffer));

    let x = x_js.as_f64().unwrap() as f32;
    let y = y_js.as_f64().unwrap() as f32;
    let umv_matrix = gl.get_uniform_location(&shaderProgram, "uMVMatrix");
    let mv_matrix: Vec<f32> = vec![
        1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, y, x, 0.0, 1.0,
    ];

    gl.uniform_matrix4fv_with_f32_array(umv_matrix.as_ref(), false, &mv_matrix[..]);

    let frag_color = gl.get_uniform_location(&shaderProgram, "fragColor");
    let frag_color_vec: Vec<f32> = vec![0.9, 0.3, 0.6];

    gl.uniform3fv_with_f32_array(frag_color.as_ref(),  &frag_color_vec[..]);
    // Get the attribute location
    let coord = gl.get_attrib_location(&shaderProgram, "aVertexPosition") as u32;

    // Point an attribute to the currently bound VBO
    gl.vertex_attrib_pointer_with_i32(coord, 3, WebGlRenderingContext::FLOAT, false, 0, 0);

    // Enable the attribute
    gl.enable_vertex_attrib_array(coord);

    /*============= Drawing the primitive ===============*/

    // Clear the canvas
    gl.clear_color(0.7, 0.5, 0.7, 1.0);

    // // Enable the depth test
    gl.enable(WebGlRenderingContext::DEPTH_TEST);

    // Clear the color buffer bit
    gl.clear(WebGlRenderingContext::COLOR_BUFFER_BIT);

    // Set the view port
    gl.viewport(0, 0, canvas.width() as i32, canvas.height() as i32);

    // Draw the triangle
    gl.draw_arrays(
        WebGlRenderingContext::TRIANGLES,
        0,
        (vertices.len() / 3) as i32,
    );

    gl.buffer_data_with_array_buffer_view(
        WebGlRenderingContext::ARRAY_BUFFER,
        &lines_array,
        WebGlRenderingContext::STATIC_DRAW,
    );

    let frag_color_vec: Vec<f32> = vec![0.0, 0.0, 0.0];

    gl.uniform3fv_with_f32_array(frag_color.as_ref(),  &frag_color_vec[..]);
    // Draw the triangle
    gl.draw_arrays(WebGlRenderingContext::LINES, 0, (lines.len() / 3) as i32);


    Ok(())
}
