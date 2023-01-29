class telephoneUpdate {
    constructor() {
        this.observers = new set();
        this.Email = new set();
        this.Wallet = new set();

    }


    add(number) {
        this.observers.add(number)
    }

    remove(number) {
        this.observers.delete(number)
    }

    dial(phonenumber) {
        this.observer.dial(phonenumber)
    }

  
}

class Phonenumber extends telephoneUpdate{
    onDial(number) {
        console.log(`The number is ${number} previously`)
    }

}
const phone = new telephoneUpdate ();
phone.number('44883248');

const observer = new Phonenumber();
phone.phonenumber

console.log(telephoneUpdate)
// function subject(){
//     this.observers = []
// }


// subject.protype = {
//     addPhoneNumber: function (fn) {
//         this.observers.push(fn)
//     },

//     removePhoneNumber: function (fnToRemove) {
//         this.observers = this.observers.filter(fn => {
//             if (fn != fnToRemove)
//                 return fn

//         })


//     },

//     dialPhoneNumber: function (fn) {
//         this.observers.call(fn)
//     },

//     fire: function () {
//         this.observer.forEach(fn => {
//             fn.call()
//         })
//     }



// }

// const observer = new subject()

// function observer1(){
//     console.log('call: 08144883248')
// };


// function observer2(){
//     console.log('Now Dialling: +234_70232323 ')
// }

// subject.dialPhoneNumber(observer1)

// subject.fire()


