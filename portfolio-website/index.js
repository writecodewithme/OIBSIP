

const hamburgerIcon= document.getElementById("navigation-icon")
const closeMenu=document.getElementById("close-menu")
const navigationIcon=document.getElementsByClassName(".bi-list")
const navItems=document.getElementById("nav-items")

hamburgerIcon.addEventListener("click",function(){
       navItems.style.transform= "translateX(0px)"
       navItems.style.transition="0.3s ease"
       hamburgerIcon.style.display="none"
       closeMenu.style.display="block"
       
       })

       closeMenu.addEventListener('click',()=>{
              
              navItems.style.transform= "translateX(500px)"
              navItems.style.transition="0.3s ease"
              hamburgerIcon.style.display="block"
              closeMenu.style.display="none"
              window.scrollBy=("0,0")
       

       })
       $('nav ul li a').on('click', function () {
                 if(window.innerWidth<600){
                     $('nav ul').css("transform", "translatex(500px)");
                      hamburgerIcon.style.display='block';
                     closeMenu.style.display='none'
       }
               });

      
     

      
      
      




   

