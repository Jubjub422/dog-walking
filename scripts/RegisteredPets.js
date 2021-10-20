import { getPets } from "./database.js"
import { getWalkers } from "./database.js"

const petWalker = getWalkers()


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("oPets")) {
            const [, petId] = itemClicked.id.split("--")
            let foundPet = null
            let foundWalker = null
            for (const pet of pets) {
                if (pet.id === parseInt(petId)) {
                    foundPet = pet

                    for (const walker of petWalker) {
                        if (walker.id === foundPet.walkerId) {
                            foundWalker = walker
                            // let petWalkers = petWalker.filter(  // <--- Go to YouTube and search "javascript array filter"
                            // (walker) => {
                            //     if (walker.id === parseInt(petId)) {
                            //         return true
                            //     }
                            // }
                            // )
                            // if (walker.id === parseInt(petId)) {
                            // }
                            // }
    
                        }
                    }
                }
            }
            window.alert(`${foundPet.name} is being walked by ${foundWalker.name} `)
        }})

const pets = getPets()

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id ="oPets--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

