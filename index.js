document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("one").addEventListener("click", () => {
    document.getElementById("image").style.animationName = "animation-one"
  })
  document.getElementById("two").addEventListener("click", () => {
    document.getElementById("image").style.animationName = "animation-two"
  })
  document.getElementById("three").addEventListener("click", () => {
    document.getElementById("image").style.animationDuration = "0.5s"
  })
  document.getElementById("four").addEventListener("click", () => {
    document.getElementById("image").style.animationDuration = "1s"
  })
  document.getElementById("five").addEventListener("click", () => {
    document.getElementById("image").style.animationDuration = "2s"
  })
  document.getElementById("six").addEventListener("click", () => {
    document.getElementById("image").style.animationDuration = "3s"
  })
})
