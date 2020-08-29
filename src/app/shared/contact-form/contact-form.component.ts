import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  @Input() contactForm: ContactFormFields;
  isDarkBackground = true;

  constructor() {}

  ngOnInit(): void {
    this.isDarkBackground = this.contactForm.type !== 'contact';
  }
}

export type ContactFormFields = {
  title: string;
  subtitle: string;
  type: ContactFormType;
};

export enum ContactFormType {
  Account = 'account',
  Partner = 'partner',
  Newsletter = 'newsletter',
  Contact = 'contact',
}
