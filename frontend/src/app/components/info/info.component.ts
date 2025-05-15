import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  frontend: string[] = ["HTML", "JavaScript", "TypeScript", "CSS", "Angular 18" ];
  backend: string[] = ["Java 17", "Maven", "SpringBoot", "Spring Data JPA", "Spring MVC", "Hibernate"];
  database: string= "PostgreSQL 16";
  webServices: string[] = ["AWS EC2", "AWS RDS", "AWS S3"];
  gitHub: string = "https://github.com/klmj123/TechnoligiesWebsite.git"


}
