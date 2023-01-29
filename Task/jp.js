//Creating a Parent Class
class AnimalKingdom{

// Using The Knowledge of Abstraction to create a constructor that throw err when called <br>
// directly.

    // constructor(){
    //     if(this.constructor === AnimalKingdom) {
    //         throw new Error('Balablu, Bulabai Omo E no fit work. Dey Play!')
    //     }
    // }
    
//Using the Knowledge of Encapsulation to create a private property
    #vertebrate(){
        console.log('Animal with BackBone.')
    }
    #Invertebrate(){
        console.log('Animal without Backbone.')
    }
    
    // Creating a mediator that can access the private properties above.
    showVertebrate(){
        this.#vertebrate();
    }
    

    showInvertebrate(){
        this.#Invertebrate();
    }
// Creating a property call Cold and Endothermic_Animal
    Cold_Blooded = 'Arthropoda, Fishes ,  Amphibia , Reptiles.';

    Endothermic_Animal = 'Aves , Mammals.'


// Using the display command to display our class property outside the class.
    displayCold_Blooded(){
        console.log(this.Cold_Blooded);
    }

    displayWarm_Blooded(){
        console.log(this.Endothermic_Animal);
    }



}

// Intanciating The parent class
const kingdom = new AnimalKingdom();
kingdom.showInvertebrate();


//Creating the Child class that Inherited the property of the parent class 
class AnimalsWithBackBone extends AnimalKingdom{
    Mammals = "cat"
    Aves = "Hawk"
    Reptiles = "Tortise"
    Fish = "Tench"

    displayMammals(){
        console.log(this.Mammals);
    }

    displayAves(){
        console.log(this.Aves);
    }

    displayReptiles(){
        console.log(this.Reptiles);
    }

    displayFishes(){
        console.log(this.Fish);
    }

    // Warm_Blooded(){
    //     throw new Error('You need to be following Instructions.')

    // }



}
const Vertebrate = new AnimalsWithBackBone();

Vertebrate.displayMammals();
Vertebrate.displayAves();
Vertebrate.displayReptiles();
Vertebrate.displayFishes();
// Vertebrate.Warm_Blooded();

Vertebrate.showVertebrate();

class AnimalWithoutBackbone extends AnimalKingdom {

    Arthropoda = "Butterfly"

    // Cold_Blooded(){
    //     throw new Error('Fellow the Right Procedure.')

    // }

    displayArthropoda(){
        console.log(this.Arthropoda);
    }
    

}
const Zoo = new AnimalWithoutBackbone();
Zoo.displayArthropoda();
Zoo.showInvertebrate();



// Created the third Class That inherited the property Animal Property
class Cold_Blooded extends AnimalKingdom{
    Ectotherm_Animals = 'Arthropoda, Fishes ,  Amphibia , Reptiles.';

    displayEctotherm(){
        console.log(this.Ectotherm_Animals);
    }


}
const cold = new Cold_Blooded;
cold. displayEctotherm();
cold.displayCold_Blooded();
cold.showInvertebrate();


class Warm_Blooded extends AnimalKingdom {
     Endothermic_Animal = 'Aves , Mammals.'

     displayEndothermic(){
        console.log(this.Endothermic_Animal);
     }

}
const warm = new Warm_Blooded;
warm.  displayEndothermic()
warm.displayWarm_Blooded();
