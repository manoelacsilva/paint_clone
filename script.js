const canvas = document.querySelector("canvas");
const contexto = canvas.getContext("2d");

const inputColor = document.querySelector(".input__color");
const tools = document.querySelectorAll(".button__tool");
const sizeButtons = document.querySelector(".button__size");
const buttonClear = document.querySelector(".button__clear");

let brushSize = 10;

contexto.fillStyle = "#000"

let isPainting = false

canvas.addEventListener("mousedown", ({clientX, clientY}) => {
    draw(clientX, clientY)
    isPainting = true
})

canvas.addEventListener("mousemove", ({clientX, clientY}) => {
    if (isPainting) {
        draw(clientX, clientY)
    }
})

canvas.addEventListener("mouseup", ({clientX, clientY}) => {
    isPainting = false
})

const draw = (x, y) => {
    contexto.beginPath()
    contexto.arc (
        x - canvas.offsetLeft,
        y - canvas.offsetTop,
        brushSize / 2,
        0,
        2 * Math.PI
    )
    contexto.fill()
}