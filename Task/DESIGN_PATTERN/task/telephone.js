class TelephoneUpdate{
    constructor(){
        this.phoneNumbers = [];
        this.observers = [];

    }

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


class observer extends TelephoneUpdate{
    onDial(number){
        console.log(`The number ${number} has been dialed`);
    }
}

const phone = new TelephoneUpdate();

phone.addPhoneNumber('+23444883248');


const observed = new observer();
phone.addPhoneNumber(observed);

phone.dialnumber('234568765456');

console.log(phone, observed)

