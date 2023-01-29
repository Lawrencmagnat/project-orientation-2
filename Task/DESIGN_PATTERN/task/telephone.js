
/*Creating of an observer class in design pattern called Telephone 
this class will send an update to the numbers that subscribed telling them about the new system update */

class TelephoneUpdate{
    // creat a constructor that can be accessible by all the method of the class..and the constructor have the number and the observers.
    constructor(){
        this.phoneNumbers = [];
        this.observers = [];

    }

    // creating of the methods called addPhonenumber, removePhoneNumber and dialnumber.

    addPhoneNumber(number){
        this.phoneNumbers.push(number);
    }

    removePhoneNumber(number){
        this.phoneNumbers = this.phoneNumbers.filter(b => b !==number);
    }

    dialnumber(number){
        // if(!this.phoneNumbers.includes(number)){
        //     throw new Error('Number not correctly formatted')

        // }

        // I wanted to  create a database that will store an exact number; if the owner of the number entered another number except of the inital one, it will throw err, but I got bugon the way; so i japa.
        this.phoneNumbers.push(number);

        this.observers.forEach(observer => observer.onDial(number));
    }
    addObserver(observer){
        this.observers.push(observer);
    }

    removeObserver(observer){
        this.addObservers = this.observers.filter( c => c !== observer);
    }
}

// I created a class with an extension of our main class TELEPHONEUPDATE using the OOP knowledge

class observer extends TelephoneUpdate{
    onDial(number){
        console.log(`The number ${number} has been dialed`);
    }
}

// Instaciating the class into A new class

const phone = new TelephoneUpdate();

// Adding a number outside our main class with the "hook" that can grab the method inside the class

phone.addPhoneNumber('+23444883248');


// Instaciating the class into A new class
const observed = new observer();
// We added a message using the hook that can connect the into the class even though connecting from the outside of the class.
phone.addPhoneNumber(observed);

// Adding a number outside our main class with the "hook" that can grab the method inside the class
phone.dialnumber('234568765456');

// Consoling our code to see if it works.
console.log(phone, observed)

//.
