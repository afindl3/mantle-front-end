import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  activeTestimonial = 0;
  customerTestimonials = [
    {
      title: 'Insert testimonial 1 here. Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod.',
      label: 'BUZZ WORD',
    },
    {
      title: 'Insert testimonial 2 here. Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod.',
      label: 'BUZZ WORD',
    },
    {
      title: 'Insert testimonial 3 here. Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod.',
      label: 'BUZZ WORD',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onPrevious() {
    if (this.activeTestimonial !== 0) {
      this.activeTestimonial -= 1;
    }
  }

  onNext() {
    if (this.activeTestimonial !== this.customerTestimonials.length - 1) {
      this.activeTestimonial += 1;
    }
  }
}
