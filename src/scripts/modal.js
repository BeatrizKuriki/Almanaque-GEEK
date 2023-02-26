
export function createModal(id, array){
    const modalContainer = document.createElement('div')
    const modalImg = document.createElement('img')
    const modalTitle = document.createElement('h2')
    const modalFrom = document.createElement('span')
    const modalDescription = document.createElement('p')
    const modalClose = document.createElement('button')

    const characterFound = array.find(character => character.id === Number(id))


    modalImg.src = characterFound.image
    modalImg.alt = characterFound.name

    modalFrom.innerText = characterFound.from

    modalFrom.classList.add('modal__subtitle')

    modalDescription.innerText = characterFound.description

    modalDescription.classList.add('modal__description')

    modalClose.innerText = 'Ver menos'
    modalClose.classList.add('modal__btn')

    modalContainer.append(modalImg, modalTitle, modalFrom, modalDescription, modalClose)

    return modalContainer
}

export function closeModal(){
    const modal = document.querySelector('.modal__container')
    const closeButton = document.querySelector('.modal__btn')

    closeButton.addEventListener('click', () =>{
        modal.close()
    })
}