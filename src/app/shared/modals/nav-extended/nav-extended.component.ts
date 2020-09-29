import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-extended',
  templateUrl: './nav-extended.component.html',
  styleUrls: ['./nav-extended.component.scss'],
})
export class NavExtendedComponent implements OnInit {
  @Input() extendedMenuType;

  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  ngOnInit() {}

  onClose() {
    // Also need to close mobile nav
    this.activeModal.close('close');
  }

  onBack() {
    // Back to mobile dropdown menu
    this.activeModal.close('back');
  }

  onRoute(route: string) {
    // Also need to close mobile nav
    this.activeModal.close('close');
    console.log('route to: ', route);
    this.router.navigate([route], { queryParamsHandling: 'merge' });
  }
}
