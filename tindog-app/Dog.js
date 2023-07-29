// Create the Dog class here
 class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    getLikeBadgeHtml() {
        return `
        <div class="like-badge">
            <img src="./images/badge-like.png" class="like-badge-icon">
        </div>
        `
    }

    getSwipeBadgeHtml() {
        return `
        <div class="swipe-badge">
            <img src="./images/badge-nope.png" class="swipe-badge-icon">
        </div>
        `
    }

    getDogHtml() {
        const {name, avatar, age, bio} = this
        return `
        <div class="dog-card">
            <img src="${avatar}" class="dog-avatar">
            <div class="dog-description">
            <p class="dog-name">${name}, <span class="dog-age">${age}</span></p>
            <p class="dog-bio">${bio}</p>
            </div>
            <div class="section-badge">
            </div>
        </div>
        `

    }
 }

 export default Dog