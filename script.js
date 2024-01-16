const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');
const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circles')

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0px';
}
function close(){
    mainMenu.style.top = '-100%';
}
// progressive steps
/* Checks if element clicked in document matches the set data type, if so, selects closest data dropdown*/
document.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches(
      "[data-dropdown-button]"
    ); /* True if element clicked matches  */
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
      return; /* If we haven't clicked dropdown or if the click is inside of a dropdown ignore*/
  
    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]");
      currentDropdown.classList.toggle(
        "active"
      ); /* Hide or show dropdown depending on click */
      console.log(currentDropdown);
    }
  
    /* Close dropdowns that aren't open */
    document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
      /*loop through active dropdowns */
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove("active");
    });
  });