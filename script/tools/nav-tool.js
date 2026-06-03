
class navModel {
   constructor(){
   this.navBar=document.getElementById('nav-bar');
   this.fullNav=document.querySelector('nav');
   this.closeNav=document.getElementById('close-nav');
   this.navItem1=document.getElementById('nav-categories-toggle');
   this.navCategoryDisplay=document.querySelector('.nav-categories');
   }
   
}



const navigation=new navModel();
const navButton=navigation.navBar;
const closeBar=navigation.closeNav;
const navDisplay=navigation.fullNav;
const toggleCategories=navigation.navItem1;
const navCategoryDisplay=navigation.navCategoryDisplay;

//navigation toggle
   navButton.addEventListener('click',()=>{
     navDisplay.style.display='block';
     navButton.style.display='none';
     closeBar.style.display='block';  
   })
   closeBar.addEventListener('click',()=>{
      navDisplay.style.display='none';
      navButton.style.display='block';
      closeBar.style.display='none'
   })
            