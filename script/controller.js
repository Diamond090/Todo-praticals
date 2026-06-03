import { TodoModel } from "./model.js";
import { TodoView } from "./view.js";
    export class TodoController{

        constructor(){
        this.model=new TodoModel();
        this.view=new TodoView();

        this.currentPage= 1;
        this.itemsPerPage= 6;
        this.totalPage=this.model.todoArray.length;
        this.maxPage=Math.ceil(this.totalPage/this.itemsPerPage);

        }


      addFunc(events){
        this.model.addTodo(events);
        this.model.addToStorage();

      }
      viewFunc(container){
        if (this.model.todoArray.length===0){
          return container.innerHTML=this.view.emptystring()
        }
        else{
       return container.innerHTML= this.view.viewtodo(this.paginationArray());
      }}
      
      deleteFunc(deleteId,container){
            this.model.deleteTodo(deleteId);
            this.model.addToStorage();
            this.viewFunc(container)
            
     }


     paginationArray(){
       this.startIndex=(this.currentPage-1)*this.itemsPerPage;
        this.stopIndex=(this.startIndex+this.itemsPerPage);

        return this.newArray=this.model.todoArray.slice(this.startIndex,this.stopIndex)
        
     }
  
     nextFunc(Button,container){
       Button.addEventListener('click',()=>{
        if(this.currentPage<this.maxPage){
       this.currentPage++;
        }
       tracker.innerHTML=`${this.currentPage}/${this.maxPage}`
       this.paginationArray();
       this.viewFunc(container)
        })
      }
      prevFunc(Button,container){
       tracker.innerHTML=`${this.currentPage}/${this.maxPage}` 
        Button.addEventListener('click',()=>{
          if(this.currentPage>1){
           this.currentPage--; 
          }
           tracker.innerHTML=`${this.currentPage}/${this.maxPage}` 
           this.paginationArray();
           this.viewFunc(container)
      })
      }

      dateRemainderFunc(eventDate){
        return this.model.DateRemainder(eventDate);

        };

      categoryFunc(container){
        this.model.categories(category,(category)=>{
        return container.innerHTML= this.view.viewtodo(category);
        })
      }

      }

    

    
    const controller=new TodoController();
    controller.dateRemainderFunc()