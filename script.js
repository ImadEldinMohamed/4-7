const input=document.getElementById('name')

const savebutton=document.getElementById('save')
const resetbutton=document.getElementById('reset')

const span=document.getElementById('span')

const form=document.getElementById('form')

form.addEventListener('click',function(e) {
    e.preventDefault()


  
})

const save = function(){
    
    let inputvalue=input.value

    localStorage.setItem('nome',inputvalue)
    alert('dato salvato')
   
    span.innerText=inputvalue
}

const reset=function(){
input.value = ''
localStorage.removeItem('nome')
alert('eliminato')

}



savebutton.addEventListener('click',save)
resetbutton.addEventListener('click',reset)
