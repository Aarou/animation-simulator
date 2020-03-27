function animate() {
 const animation = "animation-name: animation-one;"
 const duration = "animation-duration: 0.5s;"
 
 const buttonOne = document.getElementById("one")
 const buttonTwo = document.getElementById("two")
 const buttonThree = document.getElementById("three")
 const buttonFour = document.getElementById("four")
 const buttonFive = document.getElementById("five")
 const buttonSix = document.getElementById("six")
 
 buttonOne.addEventListener("click", () => {
  animation = "animation-name: animation-one;"
 })
 buttonTwo.addEventListener("click", () => {
  animation = "animation-name: animation-two;"
 })
 buttonThree.addEventListener("click", () => {
  animation = "animation-duration: 0.5s;"
 })
 buttonFour.addEventListener("click", () => {
  animation = "animation-duration: 1s;"
 })
 buttonFive.addEventListener("click", () => {
  animation = "animation-duration: 2s;"
 })
 buttonSix.addEventListener("click", () => {
  animation = "animation-duration: 3s;"
 }) 
}
