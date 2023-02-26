import { render } from "./render.js"

export function registerCharacter(array){
    const inputs = document.querySelectorAll('.register__input')

    const newCharacter = {}
    let emptyInput = 0

    inputs.forEach(input =>{
        if(input.value === ""){
            emptyInput++
        }
        newCharacter[input.name] = input.value
    })

    newCharacter.id = array.length+1
    if(emptyInput != 0){
        alert('Por favor preencha os campos necessários')
    }   
    array.push(newCharacter)
   
}

export function registerEvent(array){
    const submitButton = document.querySelector('#submitButton')

    submitButton.addEventListener('click', (event)=>{
        event.preventDefault()

        registerCharacter(array)
        render(array)

    })
}