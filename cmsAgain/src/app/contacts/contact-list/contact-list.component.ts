//import { Component } from '@angular/core';
import { Component, Output, EventEmitter } from '@angular/core';
//import { Contact } from './src/app/contacts/contact.model';

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  imageUrl: string;
  group: string | null;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  //@Output() selectedContactEvent = new EventEmitter<Contact>();
  contacts: Contact[] = [
    {
      id: "1",
      name: "R. Kent Jackson",
      email: "jacksonk@byui.edu",
      phone: "208-496-3771",
      imageUrl: "../../assets/images/jacksonk.jpg",
      group: null
    },
    {
      id: "2",
      name: "Rex Barzee",
      email: "barzeer@byui.edu",
      phone: "208-496-3768",
      imageUrl: "../../assets/images/barzeer.jpg",
      group: null
    }
    
  ];

  onSelected(contact: Contact) {
    //this.selectedContactEvent.emit(contact);
  }

  createNewContact() {
    // Logic for creating a new contact goes here
    console.log('Create new contact clicked');
  }
}
