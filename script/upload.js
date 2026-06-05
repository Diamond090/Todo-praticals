import { TodoModel } from "./model.js";
import { TodoController } from "./controller.js";
class Upload{
   eventElem=document.getElementById('todo-name');
   date=document.getElementById('date');
   category=document.getElementById('category');
   button=document.getElementById('addTodo');
   tracker=document.getElementById('tracker')



     constructor(){
        this.model=new TodoModel();
        this.controller=new TodoController();
        this.Upload=this.addElem();
        this.trackNum=0;

   }
   //using the date method to calculate remaining days and to specify if day is singular or plural
     

   addElem(){
      this.button.addEventListener('click',()=>{
      this.controller.addFunc({
         Event:this.eventElem.value,
         eventDate:{
         current:new Date().toDateString(),
         event:date.value
      },
      eventCategory:this.category.value,
      Id:crypto.randomUUID(),
   })
   this.eventElem.value='';
   this.tracker.style.display='flex';
   this.tracker.innerHTML=this.trackNum+=1
    this.button.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#48752C"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg> Added` 
    this.button.style.backgroundColor='rgba(203, 203, 231, 0.356)';
    this.button.style.backdropFilter='blur(20px)';

    setTimeout(()=>{
      this.button.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0000F5"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>Add`;
      this.button.style.backgroundColor='rgb(86, 133, 235)';

      this.button.style.transition='0.9s';

     },3000)

      })}

   dateFunc(){
      document.getElementById('date-picker').addEventListener('click',()=>{
         console.log('clicked')
         document.getElementById('date').showPicker();
      })
   }
}
 const runItem=new Upload()
 runItem.dateFunc();