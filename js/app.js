const NUMBER = 20
const board = document.querySelector('#board')
const colors = ['#06f984', '#fde802', '#ff911a', '#fc5d02', '#ff00f9']
const screenHeight = board.clientHeight
const screenWidth = board.clientWidth
const squareNumHeight = Math.floor(screenHeight / NUMBER)
const squareNumWidth = Math.floor(screenWidth / NUMBER)
console.log(squareNumWidth)

const SQUARE_NUMBER = squareNumHeight * squareNumWidth




for (let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', setColor)

  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}

function setColor(event) {
  const element = event.target
  const color = changeColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color} `
}

function removeColor(event) {
  const element = event.target
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}
function changeColor() {
  return colors[Math.floor(Math.random() * colors.length)]

}