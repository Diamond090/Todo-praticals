export class TodoModel{
    constructor(){
      this.todoArray=JSON.parse(localStorage.getItem('todoArray'))||[];
    }

     

  addToStorage(){
    localStorage.setItem('todoArray',JSON.stringify(this.todoArray));
  }

  addTodo(event){
    this.todoArray.unshift(event);
    this.addToStorage();
  }
  deleteTodo(deleteId){
       this.todoArray=this.todoArray.filter(todo=>{
        return todo.Id!==deleteId
    })
 }

   DateRemainder(EventDate){
    let currentDay=new Date();
    let eventDay=new Date(EventDate)
    if(eventDay=='Invalid Date'){
        eventDay=currentDay;
    }
    let monthRemainder=eventDay.getMonth()-currentDay.getMonth();
    let dayRemainder=eventDay.getDate()-currentDay.getDate();
    let days;
    let month=eventDay.getMonth()+1
  if(month===4||month===6||month===9||month===11){
      days=30
  }
  else if(month===2){
      days=28
  }
  else{
      days=31
  }
  const day2=currentDay.getDate();
  const day1=eventDay.getDate();

  if(monthRemainder>0){
    dayRemainder= day1-day2+(monthRemainder*days);
  }
  else if(dayRemainder<0||monthRemainder<0){
      dayRemainder='expired/invalid Date';
  }
  if(dayRemainder===0){ 
    dayRemainder='Event is Live'}
  let string;
  if(dayRemainder>1){
      string='Days'
  }
  else{string='Day'}
  let datestring=`${dayRemainder} ${string} Remaining`;
  if (dayRemainder==='expired/invalid Date'||dayRemainder==='Event is Live'){
      datestring=dayRemainder;
  }
  return datestring;
  }
}
