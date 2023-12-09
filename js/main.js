class People {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    people = [];

    setPeople(person) {
        this.people.push(person);
    }
}

class House {
    apartment = [];

    constructor(maxApartment) {
        this.maxApartment = maxApartment;
    }

    setApartment(...apartments) {
        if (apartments.length <= this.maxApartment) {
            this.apartment.push(...apartments);
            console.log(`this.apartment.length - ${this.apartment.length}`);
            console.log(`apartments.length - ${apartments.length}`);
        } else {
            console.log('Максимальное количество квартир в здании было превышено!!!');
        }
    }
}

let person1 = new People('Danya', 'Male');
let person2 = new People('Lilya', 'Female');
let person3 = new People('Dasha', 'Female');

console.log(person1);
console.log(person2);
console.log(person3);

let apartment1 = new Apartment();
let apartment2 = new Apartment();
let apartment3 = new Apartment();

apartment1.setPeople(person1);
apartment2.setPeople(person2);
apartment3.setPeople(person3);

console.log(apartment1);
console.log(apartment2);
console.log(apartment3);

let house1 = new House(2);

house1.setApartment(apartment1, apartment2, apartment3);

console.log(house1);
