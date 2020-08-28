import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss'],
})
export class DevelopersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onActivate() {
    // Scroll to top of page on every route change
    window.scroll(0, 0);
  }
}
