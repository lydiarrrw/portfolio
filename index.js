// REMOVE ANIMATIONS

document.getElementById('animationsControl')


let i = 0
const title = 'SOFTWARE ENGINEER | CARPENTER OF CODE'
const speed = 70

function typeTitle() {
  if (i < title.length) {
    document.getElementById('roles').innerHTML += title.charAt(i)
    i++
    setTimeout(typeTitle, speed)
  }
}


// set interval
window.addEventListener('roles', typeTitle())

