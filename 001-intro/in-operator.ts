/*
  FACT 004
  to search in class atributes and methods, the operator 'in' can be used
*/

interface CanSwim {
  swim(): void;
}

class Fish implements CanSwim {
  swim() {
    console.log('The fish is swimming');
  }
}

class Bird {
  fly() {
    console.log('The bird is flying');
  }
}

function move(pet: CanSwim | Bird) {
  if ('swim' in pet) {
    pet.swim();
  } else {
    pet.fly();
  }
}

const myFish = new Fish();
const myBird = new Bird();

move(myFish);
move(myBird);