 import { TodoController } from "./controller.js";
   export class TodoView{
      constructor(){
        

      }
   viewtodo(todoArray){
   this.control=new TodoController();
   this.todoString='';
   todoArray.forEach((item) => {
     this.todoString+=
     `
     <div class="items">
     <h3>${item.Event}</h3>
      <details>
        <data  value="duration">Duration:<span id="remainder">${this.control.dateRemainderFunc(item.eventDate.event)}</span></data><br>
        <data value="added-date">Added: ${item.eventDate.current}</data><br>
        <data value="event-date">Event: ${new Date(item.eventDate.event).toDateString()}</data><br>
        <data value="category">Category:${item.eventCategory}</data>
      </details>
      <div class=active-buttons>
      <button class="delete-Button" data-id="${item.Id}"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg><span>Delete</span></button>
      </div>
      <dialog id="delete-option">
      <h3 class="statement">Are you sure you want to delete this item?</h3>
       <div class="buttontab">
        <button id="cancle">Cancle</button>
        <button data-id="${item.Id}" id="accept">Yes</button>
        </div>
      </dialog>
      </div>
      `
   })
    return this.todoString;
  }
  emptystring(){
  return(`<div class="Empty"><h1 id="empty-string">Empty List</h1>
        <a href="./upload.html">Add Todo</a></div>`
  )}
  
}