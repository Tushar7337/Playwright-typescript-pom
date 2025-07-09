
import { faker } from '@faker-js/faker'; // USed to Generate Random and Unique data
import { timeEnd } from 'console';

export interface UserData {
  firstname: string;
  lastname: string;
  unqEmail: string;
  phone: string;
  pass: string;
  confPass: string;
}

export function generateRandomData(): UserData {
    const timestamp = Date.now();
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const unqEmail = `playwrightts_${timestamp}@gmail.com`;
    const phone = faker.phone.number(); // 10-digit number
    const pass = faker.internet.password({ length: 7 });
    const confPass = pass;

    return{
        firstname,
        lastname,
        unqEmail,
        phone,
        pass,
        confPass:pass
    }

}
