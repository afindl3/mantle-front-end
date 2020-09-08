import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mantle-front-end';

  constructor() {}

  ngOnInit() {}

  onActivate() {
    // Scroll to top of page on every route change
    window.scroll(0, 0);
  }
}
