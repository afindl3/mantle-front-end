import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss'],
})
export class LegalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onActivate() {
    // Scroll to top of page on every route change
    window.scroll(0, 0);
  }
}
