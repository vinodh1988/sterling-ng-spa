import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { contact } from 'src/app/model/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts:contact[];
  
  constructor(private cs:ContactService) {
      this.contacts=cs.getContacts();
   }

  ngOnInit() {
    
  }

}
