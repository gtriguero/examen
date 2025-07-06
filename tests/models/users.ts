import { faker } from "@faker-js/faker";

export type UserData = {
  firstname: string;
  lastname: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  ssn: string;
  username: string;
  password: string;
}

export function createUser(): UserData {

    const user ={
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        phone: faker.phone.number(),
        ssn: Math.floor(Math.random()*8+1)+Math.random().toString().slice(2,10), // @MARCO, voy a ser honesto:
        // lo copié de internet y no acabo de entender cómo va... pero funciona.
        username: '', // primero lo declaro vacío porque aún no tiene el firstname y lastname
        password: faker.internet.password()
    }
    // Y ahora vuelvo a llamarlo pero añadiéndole valores:    
    user.username = user.firstname.toLowerCase() + '.' + user.lastname.toLowerCase();
    return user;
}
/*


export function createUser() : User {
    const user = { 
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: '',
        password: faker.internet.password(),
        checkOption: faker.datatype.boolean(),
        website: faker.internet.url()
    }
    user.email = user.firstname + '.' + user.lastname + '@yopmail.com';
    return user;
}*/