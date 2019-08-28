import { Injectable } from '@angular/core';
import { contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts:contact[];

  constructor() { 
      this.contacts=[
        {
          title: "Chennai Corporate Office",
          building: "32, Quartz building",
          street: "Gandhi Road",
          city:"Chennai 600023",
          state:"Tamil Nadu",
          phone:"044-3434532"
        },
        {
          title: "Bangalore Knowledge Center",
          building: "43, ABC building",
          street: "New  Road",
          city:"Bangalore",
          state:"Karnataka",
          phone:"080-33234511"
        },
        {
          title: "Mumbai Office",
          building: "48, ZAZ building",
          street: "MMMM  Road",
          city:"Mumbai",
          state:"Maharashtra",
          phone:"84589080500"
        }
      ]
      
  }

  getContacts(){
    return this.contacts;
  }
}
