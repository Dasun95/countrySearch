import { countries_data } from "/countries.js";

document.querySelector('#numberOfCountries').textContent = countries_data.length

const cNames = []

for (const item of countries_data) {
    cNames.push(item.name)
}

cNames.sort((a, b) => {
    return b-a
})

const buttonStarting = document.querySelector('#starting')
const buttonAnyWord = document.querySelector('#anyWord')
const buttonSort = document.querySelector('#sort')
const container = document.querySelector('.container')
const input = document.querySelector('.input')


const printList = () => {
    container.innerHTML = ''
    for (const country of filteredList) {
        let itemZ = document.createElement('div')
        itemZ.style.backgroundImage = 'url(/images/map_image.jpg)'
        itemZ.style.width = '10vw'
        itemZ.style.height = '10vh'
        itemZ.style.margin = '5px'
        itemZ.textContent = country
        container.appendChild(itemZ)
    }
}



const loop = () => {
    input.addEventListener('input', e => {
        
        let char

        if (buttonStartingClicked) {
            char = '^'
        } else {
            char = ''
        }

        let regEx = new RegExp(char + e.target.value, 'i')
        
        filteredList = []

        for (const country of cNames) {
            if (regEx.test(country)) {
                filteredList.push(country)
            }
        }
        
        printList()
    })
}


let filteredList = []

buttonSort.addEventListener('click', e => {
    filteredList.reverse()
    printList()
})

let buttonStartingClicked = false

buttonStarting.addEventListener('click', e => {
    buttonStartingClicked = true
    buttonAnyWord.classList.remove('is-active')
    buttonStarting.classList.add('is-active')
    
    loop()
})


buttonAnyWord.addEventListener('click', e => {
    buttonStartingClicked = false
    buttonStarting.classList.remove('is-active')
    buttonAnyWord.classList.add('is-active')
    
    loop()
})

