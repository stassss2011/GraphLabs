import {render} from "graph_lab1_wasm";

let triangles = []
let lines = []

let x = 0.15;
let y = -0.65;

let changed = false

fetch('points.json')
    .then(response => {response.json()
            .then(res => main(res))
    })


function to_triangles(figures) {
    let ret = []
    figures.forEach(fig => {
        if (fig.length === 9){
            ret = ret.concat(fig)
        } else if (fig.length === 12){
            ret = ret.concat(fig.slice(0,9))
            ret = ret.concat(fig.slice(3, 12))
        }
    })
    return ret;
}

function to_lines(figures) {
    let ret = []
    figures.forEach(fig => {
        if (fig.length === 9){
            ret = ret.concat(fig.slice(0,6))
            ret = ret.concat(fig.slice(3,9))
            ret = ret.concat(fig.slice(0,3))
            ret = ret.concat(fig.slice(6,9))
        } else if (fig.length === 12){
            ret = ret.concat(fig.slice(0,3))
            ret = ret.concat(fig.slice(3,6))
            ret = ret.concat(fig.slice(0,3))
            ret = ret.concat(fig.slice(6,9))
            ret = ret.concat(fig.slice(3,6))
            ret = ret.concat(fig.slice(9,12))
            ret = ret.concat(fig.slice(6,9))
            ret = ret.concat(fig.slice(9,12))
            // ret = ret.concat(fig.slice(0,3))
            // ret = ret.concat(fig.slice(8,12))
        }
    })
    // ret = [0.0,0.2,0.0,0.3,1.0,0.0]
    return ret;
}


function main(data){
    let figures = data.figures
    triangles = to_triangles(figures)
    lines = to_lines(figures)
    console.log(triangles)
    console.log(lines)
    render(triangles, lines, x, y)
}

document.onkeydown = handleButtonClick;

function handleButtonClick(e) {
    switch (e.code) {
        case 'KeyW':
            x += 0.1
            changed = true
            break
        case 'KeyS':
            x -= 0.1
            changed = true
            break
        case 'KeyA':
            y -= 0.05
            changed = true
            break
        case 'KeyD':
            y += 0.05
            changed = true
            break
    }

    if (changed) {
        render(triangles, lines, x, y)
        changed = false
    }
}

