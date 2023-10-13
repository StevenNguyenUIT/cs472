function Animal(name,speed){
    this.name = name;
    this.speed = speed;
}

Animal.prototype.run = function(speed){
    return this.speed+=speed;
}

Animal.compareBySpeed = function (a1, a2){
    if(a1.speed > a2.speed) return 1;
    else if(a1.speed < a2.speed) return -1;
    else return 0;
}

function Rabbit(name, speed){
    Animal.call(this,name,speed);
}

Rabbit.prototype.hide = function(){
    console.log(this.name + " hides");
}

Object.setPrototypeOf(Rabbit, Animal);
Object.setPrototypeOf(Rabbit.prototype, Animal.prototype);

let rabbit1 = new Rabbit("Yell",100);
let rabbit2 = new Rabbit("Red",70);
let rabbit3 = new Rabbit("blue",130);
rabbit1.hide();
rabbit1.run(50);
console.log(rabbit1.speed);

rabbit2.hide();
rabbit2.run(50);
console.log(rabbit2.speed);

let arr = [rabbit1, rabbit2, rabbit3];

arr.sort(Animal.compareBySpeed);
console.log(arr);

let a = Animal.compareBySpeed(rabbit1, rabbit2);
console.log(a);






