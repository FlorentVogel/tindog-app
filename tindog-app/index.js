// Remember to import the data and Dog class!
import dogs from './data.js'
import Dog from './Dog.js'


let dogsArray = ["rex", "bella", "teddy"]
let isClicked = false


const getNewDog = () => {
    const nextDog = dogs[dogsArray.shift()]
    return nextDog ? new Dog(nextDog) : {}
}

const newDog = () => {
    isClicked = true
    if(dogsArray.length > 0) {
        setTimeout(() => {
            dog = getNewDog()
            render()
            isClicked = false
        }, 1500)
    }
}

const renderLikeBtn = () => {
    if (!dog.hasBeenLiked || dog.hasBeenSwiped) {
        dog.hasBeenLiked = true
        newDog()
        console.log(dog.hasBeenLiked, dog.hasBeenSwiped)
    }
}

const renderDislikeBtn = () => {
    if (!dog.hasBeenSwiped || dog.hasBeenLiked) {
        dog.hasBeenSwiped = true
        newDog()
        console.log(dog.hasBeenLiked, dog.hasBeenSwiped)
    }
}

document.querySelector(".btn-nope").addEventListener("click", () => {
    renderDislikeBtn()
    document.querySelector('.section-badge').innerHTML = dog.getSwipeBadgeHtml()
})

document.querySelector(".btn-like").addEventListener("click", () => {
    renderLikeBtn()
    document.querySelector('.section-badge').innerHTML = dog.getLikeBadgeHtml()
})


const render = () => {
    document.querySelector('.section-render').innerHTML = dog.getDogHtml()
}

let dog = getNewDog()

render()

