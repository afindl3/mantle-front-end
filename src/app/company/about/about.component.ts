import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful/contentful.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  selectedMilestone = 0;

  constructor(public contentfulService: ContentfulService) {}

  ngOnInit(): void {
    this.contentfulService.fetchTeam();
    this.contentfulService.fetchMilestones();
  }

  onClick(index: number) {
    this.selectedMilestone = index;
  }
}
