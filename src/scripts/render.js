export function render(array){
    const seriesUl = document.querySelector('.series__list')

    const animesUl = document.querySelector('.animes__list')

    const othersUl = document.querySelector('.others__list')

    seriesUl.innerHTML = ''
    animesUl.innerHTML = ''
    othersUl.innerHTML = ''

    array.forEach(character=>{
        const card = createCard(character)

        if(character.type === 'serie'){
            seriesUl.appendChild(card)
        }else if(character.type === 'anime'){
            animesUl.appendChild(card)
        }else if(character.type === 'other'){
            othersUl.appendChild(card)
        }
    })

}

function createCard(character){
    const cardContainer = document.createElement('li')
    const cardImage = document.createElement('img')
    const cardTitle = document.createElement('h2')
    const cardParag = document.createElement('p')
    const cardButton = document.createElement('button')

    cardContainer.classList.add('card__container')

    cardImage.src = character.image
    cardImage.alt = character.name

    cardTitle.classList.add('card__name')
    cardTitle.innerText = character.name

    cardParag.classList.add('card__from')
    cardParag.innerText = character.from    

    cardButton.classList.add('card__button')
    cardButton.innerText = 'Saiba mais'

    cardButton.dataset.characterId = character.id
    

    cardContainer.append(cardImage, cardTitle, cardParag, cardButton)

    return cardContainer
}