import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss'],
})
export class PlatformComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onActivate() {
    // Scroll to top of page on every route change
    window.scroll(0, 0);
  }
}
