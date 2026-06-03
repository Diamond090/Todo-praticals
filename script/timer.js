let play=false
const button=document.getElementById('play-pause')
button.addEventListener('click',()=>{
    if(!play){
      button.style.backgroundColor='transparent'
      button.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="34px" fill="#131212"><path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/></svg>';
      timer();
      play=true;
    }
    else{
        button.style.backgroundColor=' rgb(62, 62, 219)'
        button.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="34px" fill="#f8f6f6"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>';
        play=false;
        
    }

})
let alarm=false;
const alarmButton=document.getElementById('alarm');
alarmButton.addEventListener('click',()=>{
  if(!alarm){
    alarmButton.style.backgroundColor='red';
    alarmButton.style.transition='0.5s';
    alarm=true;
  }
  else{
    alarmButton.style.backgroundColor='transparent';
    alarm=false
  }
})

const audio=new Audio('./sound/alarm.mp3');
function alarmFunc(){
  if(alarm){
    audio.play();
  }}

let sec=Number(localStorage.getItem('sec'))||0;
let min=Number(localStorage.getItem('min'))||0;
let hr=Number(localStorage.getItem('hr'))||0;
let timerBox=document.getElementById('timer-box');
let result=`${String(hr).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
timerBox.innerHTML=result;

function timer(){
 let intervalId=setInterval(()=>{
     if(play){

   if(sec>0){
    sec--;
   }
   else if(min>0){
    min--;
    sec=59;
   }
   else if(hr>0){
     min=59
     sec=59
   }
   else{
    alarmFunc();
    clearInterval(intervalId);
   }
    let result=`${String(hr).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
    timerBox.innerHTML=result;
    addToStorage();

    return result;

}else{
clearInterval(intervalId)
}
},1000)

}

function addNewTimer(){
  const hrValue=document.getElementById('timer-hr');
    const minValue=document.getElementById('timer-min');
     const secValue=document.getElementById('timer-sec');
     const box= document.getElementById('new-timerbox');
    document.getElementById('new-timer')
 .addEventListener('click',()=>{
  box.showModal()
 })

 document.getElementById('add')
 .addEventListener('click',()=>{
  
  sec=parseInt(secValue.value)||0;
  min=parseInt(minValue.value)||0;
  hr=parseInt(hrValue.value)||0;
  addToStorage()
  timerBox.innerHTML=`${String(hr).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`
  timer()
  box.close()
  
 })

 document.getElementById('cancle')
 .addEventListener('click',()=>{
    box.close()

 })
}
addNewTimer()

function addToStorage(){
  localStorage.setItem('hr',hr)
  localStorage.setItem('min',min)
  localStorage.setItem('sec',sec)
}