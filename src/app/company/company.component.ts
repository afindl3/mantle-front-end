import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onActivate() {
    // Scroll to top of page on every route change
    window.scroll(0, 0);
  }
}
