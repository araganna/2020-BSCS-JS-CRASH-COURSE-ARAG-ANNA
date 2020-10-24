const person = {

    speak: function () {

        console.log(this.phrase)
    },
}


const elliot = Object.create(person)
elliot.phrase = 'ANNA MARIE ARAG'

console.log(person.isPrototypeOf(elliot))
elliot.speak()