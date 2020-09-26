const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")


// when I click the toggle tag, toggle a class of open on the main tag
// and if its open, make the toggle tag say closed
toggleTag.addEventListener("click", function (){
  mainTag.classList.toggle("open")
  
  if (mainTag.classList.contains("open")) {
      toggleTag.innerHTML = '<img src="close.svg"> Close'
      } else {
        toggleTag.innerHTML = '<img src="menu.svg"> Menu'
      }
})