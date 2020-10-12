/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/graph_lab1_wasm_bg.wasm": function() {
/******/ 			return {
/******/ 				"./graph_lab1_wasm_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_59cb74e423758ede": function() {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_new_59cb74e423758ede"]();
/******/ 					},
/******/ 					"__wbg_stack_558ba5917b466edd": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_stack_558ba5917b466edd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_4bb6c2a97407129a": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_error_4bb6c2a97407129a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_adf3196bdc02b386": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_instanceof_Window_adf3196bdc02b386"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_6cc8d0b87c0a99b9": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_document_6cc8d0b87c0a99b9"](p0i32);
/******/ 					},
/******/ 					"__wbg_getElementById_0cb6ad9511b1efc0": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_getElementById_0cb6ad9511b1efc0"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlCanvasElement_4f5b5ec6cd53ccf3": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_instanceof_HtmlCanvasElement_4f5b5ec6cd53ccf3"](p0i32);
/******/ 					},
/******/ 					"__wbg_width_a22f9855caa54b53": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_width_a22f9855caa54b53"](p0i32);
/******/ 					},
/******/ 					"__wbg_height_9a404a6b3c61c7ef": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_height_9a404a6b3c61c7ef"](p0i32);
/******/ 					},
/******/ 					"__wbg_getContext_37ca0870acb096d9": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_getContext_37ca0870acb096d9"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_WebGlRenderingContext_a37cc8c6016098e4": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_instanceof_WebGlRenderingContext_a37cc8c6016098e4"](p0i32);
/******/ 					},
/******/ 					"__wbg_bufferData_0690087420a9f115": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_bufferData_0690087420a9f115"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_uniform3fv_2494b1038af21d5d": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_uniform3fv_2494b1038af21d5d"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_uniformMatrix4fv_8f6f3c8389e3b449": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_uniformMatrix4fv_8f6f3c8389e3b449"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_attachShader_d213e7ecd3432f4a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_attachShader_d213e7ecd3432f4a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_bindBuffer_f0ba4bbfd5b08434": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_bindBuffer_f0ba4bbfd5b08434"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_clear_c9cc14c37d12a838": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_clear_c9cc14c37d12a838"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_clearColor_73695d8d401f87e6": function(p0i32,p1f32,p2f32,p3f32,p4f32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_clearColor_73695d8d401f87e6"](p0i32,p1f32,p2f32,p3f32,p4f32);
/******/ 					},
/******/ 					"__wbg_compileShader_961db910485f4a76": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_compileShader_961db910485f4a76"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createBuffer_4deb008968921e7f": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_createBuffer_4deb008968921e7f"](p0i32);
/******/ 					},
/******/ 					"__wbg_createProgram_b502951c403f671a": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_createProgram_b502951c403f671a"](p0i32);
/******/ 					},
/******/ 					"__wbg_createShader_7bd4296ba9c32133": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_createShader_7bd4296ba9c32133"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_drawArrays_cbb0990b0388fa17": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_drawArrays_cbb0990b0388fa17"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_enable_700dbd1724c67920": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_enable_700dbd1724c67920"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_enableVertexAttribArray_4b6614b028d442ff": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_enableVertexAttribArray_4b6614b028d442ff"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getAttribLocation_98ff7fc515cda07d": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_getAttribLocation_98ff7fc515cda07d"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_getProgramInfoLog_a84afc629d343c75": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_getProgramInfoLog_a84afc629d343c75"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getProgramParameter_327111ebb2bca7fb": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_getProgramParameter_327111ebb2bca7fb"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getShaderInfoLog_a9529ee3f2ebd3e0": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_getShaderInfoLog_a9529ee3f2ebd3e0"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getShaderParameter_d7853b2d4822ad9f": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_getShaderParameter_d7853b2d4822ad9f"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getUniformLocation_55700686ebe625a9": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_getUniformLocation_55700686ebe625a9"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_linkProgram_7c29f15a5150d174": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_linkProgram_7c29f15a5150d174"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_shaderSource_bf6be2cc97a14fc1": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_shaderSource_bf6be2cc97a14fc1"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_useProgram_51f7808f5955c03a": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_useProgram_51f7808f5955c03a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_vertexAttribPointer_76ddec1ed8425967": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_vertexAttribPointer_76ddec1ed8425967"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32);
/******/ 					},
/******/ 					"__wbg_viewport_dd0dedc488a8dba4": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_viewport_dd0dedc488a8dba4"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbindgen_is_function": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbindgen_is_function"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbg_next_edda7e0003e5daf9": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_next_edda7e0003e5daf9"](p0i32);
/******/ 					},
/******/ 					"__wbg_done_037d0a173aef1834": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_done_037d0a173aef1834"](p0i32);
/******/ 					},
/******/ 					"__wbg_value_e60bbfb7d52af62f": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_value_e60bbfb7d52af62f"](p0i32);
/******/ 					},
/******/ 					"__wbg_iterator_09191f8878ea9877": function() {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_iterator_09191f8878ea9877"]();
/******/ 					},
/******/ 					"__wbg_newnoargs_f3b8a801d5d4b079": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_newnoargs_f3b8a801d5d4b079"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_8e95613cc6524977": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_call_8e95613cc6524977"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_next_2966fa909601a075": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_next_2966fa909601a075"](p0i32);
/******/ 					},
/******/ 					"__wbg_self_07b2f89e82ceb76d": function() {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_self_07b2f89e82ceb76d"]();
/******/ 					},
/******/ 					"__wbg_window_ba85d88572adc0dc": function() {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_window_ba85d88572adc0dc"]();
/******/ 					},
/******/ 					"__wbg_globalThis_b9277fc37e201fe5": function() {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_globalThis_b9277fc37e201fe5"]();
/******/ 					},
/******/ 					"__wbg_global_e16303fe83e1d57f": function() {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_global_e16303fe83e1d57f"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_buffer_49131c283a06686f": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_buffer_49131c283a06686f"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_79f4487112eba5a7": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_new_79f4487112eba5a7"](p0i32);
/******/ 					},
/******/ 					"__wbg_subarray_f5aa665f0873e6e8": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_subarray_f5aa665f0873e6e8"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Memory_8d2ddec6afb83aaa": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_instanceof_Memory_8d2ddec6afb83aaa"](p0i32);
/******/ 					},
/******/ 					"__wbg_get_0e3f2950cdf758ae": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbg_get_0e3f2950cdf758ae"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_number_get": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbindgen_number_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_boolean_get": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbindgen_boolean_get"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_rethrow": function(p0i32) {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbindgen_rethrow"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["../pkg/graph_lab1_wasm_bg.js"].exports["__wbindgen_memory"]();
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../pkg/graph_lab1_wasm_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/graph_lab1_wasm_bg.wasm":"501d1a108d6c4b16d795"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\n// asynchronously. This `bootstrap.js` file does the single async import, so\n// that no one else needs to worry about it again.\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });