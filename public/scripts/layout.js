const menuButton=document.getElementById('menuIcon');
const menu = document.getElementsByClassName('menu')[0];
const menuClose=document.getElementById('menuClose');
const title=document.getElementById('title')
menuButton.addEventListener('click',()=>{
  active(menu)
})
menuClose.addEventListener('click',()=>{
  active(menu)
  console.log('click')
})
const active=(element)=>{
  let isElementClose = element.classList.contains('inactive');
  if (isElementClose === true) {
      element.classList.remove("inactive");
      console.log('desactivado')
  }else{
    element.classList.add('inactive')
    console.log('activado')
  }
}
/*else if (isElementClose === true) {
  active(element)
}
const active=(element)=>{
  element.classList.remove('inactive')
}*/
