//import { Component } from '@angular/core';
import { Component, Input } from '@angular/core';
//import { Contact } from './src/app/contacts/contact.model';

@Component({

  //Contanct Input Variable
  selector: 'app-contact-item',
  //templateUrl: './src/app/contacts/contact-item/contact-item.component.html'
  //styleUrl: ['./src/app/contacts/contact-item/contact-item.component.css'];

})
export class ContactItemComponent {
    
  //@Input() contact!:
  //@Output() contactSelected = new EventEmitter<Contact>();

  onClick() {
    //this.contactSelected.emit(this.contact);
  }

}