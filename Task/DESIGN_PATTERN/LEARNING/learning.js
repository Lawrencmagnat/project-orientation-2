class shapes{
    constructor(type, width, height){
        this.type = type;
        this.height = height;
        this.width = width;
    }

    area(){
       console.log(this.width * this.height);
    }
}

const rectangle = new shapes("rectangle", 200, 100);
const square = new shapes("square", 250, 130);

rectangle.area();
square.area();

//  Different design patterns:
//  1)CONSTRUCTOR PATTERN

class cars{
    constructor(name, year, color, pattern){
        this.name = name;
        this.year = year;
        this.color = color;
        this.pattern = pattern;
    }
}

const Audi = new cars("Audi_avlon", 2021, 'Red', 'Open_Roofed');
const Honda = new cars("Honda_avlon", 2020, 'blue', 'Bullet_proofed')

console.log(Audi, Honda);
// console.log(Honda);