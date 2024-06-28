import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', description: 'Proficient in building SPAs with Angular.' },
    { name: 'JavaScript', description: 'Strong understanding of ES6 and TypeScript.' },
    // Add more skills as needed
  ];
}
