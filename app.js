import {array} from './wordsarray.js'

var input=document.querySelector('.input')
var container= document.querySelector('.container')
var defination=document.querySelector('.def')
var defination1=document.querySelector('.def1')
var hiddenM=document.querySelectorAll('.hidden')
var partsOfSpeech=document.querySelector('.partsofsp')
var Example=document.querySelector('.ex')
var buttonLearnt=document.querySelector('.button-learnt')

    input.addEventListener('keydown',e=>{
    if(e.keyCode===13){
        search(input.value)
        hiddenM[0].style.display='block'
        hiddenM[1].style.display='block'
        hiddenM[2].style.display='block'
        buttonLearnt.style.display='block'
    }
    })
    buttonLearnt.addEventListener('click',e=>{
      addtoprogressbar ()
    })
    container.addEventListener('click',e=>{
        if(e.target.className==="far fa-times-circle"){
          e.target.closest('p').remove() } 

      if (e.target.className==='right-text') {
        console.log(e.target.className.innerText);
      }

        if(e.target.className==='adjective'){
           if (e.target.parentNode.children[2].style.display === "block") {
              e.target.parentNode.children[2].style.display = "none";
             } else {
              e.target.parentNode.children[2].style.display = "block";
            }
          }
          })

function addtoprogressbar (){
    var html=`<p class="progress"><span class='right-text'>${input.value}</span>
    <i class="far fa-times-circle"></i></p>`
    document.querySelector('.progressbar').insertAdjacentHTML('afterbegin',html)
    input.value=''
}

async function search (value){

  var promice= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`);
  var data= await promice.json()
  console.log(data);
  var def=data[0].meanings[0].definitions[0].definition
  var def1=data[0].meanings[0].definitions[1].definition
  var partofspeech=data[0].meanings[0].partOfSpeech
 
  var example=data[0].meanings[0].definitions[0].example + ', ' + data[0].meanings[0].definitions[1].example

  defination.innerHTML=def
  defination1.innerHTML=def1
  partsOfSpeech.innerHTML=partofspeech
  Example.innerHTML=example
}