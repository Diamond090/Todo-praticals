import { TodoModel } from "./model.js";
import { TodoController } from "./controller.js";
class Upload{
   eventElem=document.getElementById('todo-name');
   date=document.getElementById('date');
   category=document.getElementById('category');
   button=document.getElementById('addTodo');



     constructor(){
        this.model=new TodoModel();
        this.controller=new TodoController();
        this.Upload=this.addElem()
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
      })
   }

   dateFunc(){
      document.getElementById('date-picker').addEventListener('click',()=>{
         console.log('clicked')
         document.getElementById('date').showPicker();
      })
   }
}
 const runItem=new Upload()
 runItem.dateFunc();