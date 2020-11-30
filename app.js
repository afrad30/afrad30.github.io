const container=document.querySelector('.container')
const inputItem=document.querySelector('.input')

//add items

inputItem.addEventListener('keydown',e=>{
    if(e.keyCode===13){
        additem()
    }
})

container.addEventListener('click',e=>{
    if (e.target.className==="button-done") {
    e.target.style.display='none'
    e.target.parentElement.children[0].style.textDecoration = "line-through";
    e.target.parentElement.children[0].style.textDecorationColor = "maroon";
  }else if(e.target.className==='button-remove'){
      e.target.parentElement.style.display='none'
  }else if(e.target.className==="additem"){
      additem()
  }
})

function additem (){
   if(inputItem.value==='') {
       return
   }else{
       var html=`<li class="item">
    <span class="text">${inputItem.value}</span>
    <button class="button-done">done</button>
    <button class="button-remove">remove</button>
</li>`
}
   

document.querySelector('.itemlist').insertAdjacentHTML('afterbegin',html)
inputItem.value=''
}

//event in item
//remove item
