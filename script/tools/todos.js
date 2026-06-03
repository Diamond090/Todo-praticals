import { TodoController } from "../controller.js";
import { TodoModel } from "../model.js";
import { TodoView } from "../view.js";

 export class DisplayTodo{
       htmlContainer=document.querySelector('.todo-container');
       nextButton=document.getElementById('next');
       prevButton=document.getElementById('prev');
       pageTracker=document.getElementById('tracker');
    constructor(){
        this.model=new TodoModel();
        this.control=new TodoController();
        this.view=new TodoView();

    }
       

    updateView(){
         this.control.viewFunc(this.htmlContainer);
         this.deleteButton=document.querySelectorAll('.delete-Button');
         this.deleteButton.forEach((button)=>{
           button.addEventListener('click',()=>{
             let buttonId=button.dataset.id;
            const dialog=document.getElementById('delete-option');
            dialog.showModal();

            let acceptOption=document.getElementById('accept');
            acceptOption.addEventListener('click',()=>{
                const deleteId=acceptOption.dataset.id
                this.control.deleteFunc(buttonId,this.htmlContainer);
                window.location.reload()
            })

            let cancleOption=document.getElementById('cancle')
            cancleOption.addEventListener('click',()=>{
                dialog.close();
            })
         })
        })


        
    }
    
    paginationUpdate(){
        this.control.nextFunc(this.nextButton,this.htmlContainer);
        this.control.prevFunc(this.prevButton,this.htmlContainer)
    }

    
   

   }
   const displayHtml=new DisplayTodo();
   displayHtml.updateView();
   displayHtml.paginationUpdate();

