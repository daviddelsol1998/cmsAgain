import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
//import { Message } from './messages/mesage.model';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css'
})
export class MessageEditComponent {
  @ViewChild('subject') subjectInput!: ElementRef;
  @ViewChild('msgText') msgTextInput!: ElementRef;

  //@Output() addMessageEvent = new EventEmitter<Message>();
  currentSender: string = 'We Learn CMS';

  onSendMessage() {
    // Get the values from the input elements
    const subject = this.subjectInput.nativeElement.value;
    const msgText = this.msgTextInput.nativeElement.value;

    // Create a new Message object
    //const newMessage = new Message(
    //  subject,
    //  msgText,
    //  this.currentSender
    //);

    // Emit the new Message object
    //this.addMessageEvent.emit(newMessage);
    
    // Optionally, you can clear the input fields after sending
    this.subjectInput.nativeElement.value = '';
    this.msgTextInput.nativeElement.value = '';
  }

  onClear() {
    // Clear the values of the subject and msgText input elements
    this.subjectInput.nativeElement.value = '';
    this.msgTextInput.nativeElement.value = '';
  }
}
