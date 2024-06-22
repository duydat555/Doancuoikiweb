const showMenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId),
    nav=document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLinlk=document.querySelectorAll('.nav_link'),
      navMenu=document.getElementById('nav-menu')

      function linkAction(){
        navMenu.classList.remove('show')
      }
      navLinlk.forEach(n=> n.addEventListener('click',linkAction))

const sections=document.querySelectorAll('section[id]')
 window.addEventListener('scroll'.scrollActive)

 function scrollActive(){
    const scrollY=window.pageYOffeset
    sections.forEach(current=>{
        const sectionHeight=current.offsetsHeight
        const sectionTop=current.offsetTop-50
        sectionId=current.getAttribute('id')

        if(scrollY>sectionTop && scrollY<=sectionTop+sectionHeight){
            document.querySelector('.nav_menu a[href='+ sectionId+ ']').classList.add('active')
            
        }else{
            document.querySelector('.nav_menu a[href='+ sectionId+ ']').classList.remove('active')
        }
    })
 }


 window.onscroll=()=>{
    const nav=document.getElementById('header')
    if(TouchList.scollY>=200)nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')

 }