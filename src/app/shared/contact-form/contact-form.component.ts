import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() formType: string;

  constructor() {}

  ngOnInit(): void {}
}
