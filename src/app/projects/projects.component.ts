import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { name: 'Project 1', description: 'Description of project 1', url: 'http://example.com' },
    { name: 'Project 2', description: 'Description of project 2', url: 'http://example.com' },
    // Add more projects as needed
  ];
}
