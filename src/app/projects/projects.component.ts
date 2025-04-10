import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule] ,
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Application_de_Gestion_de_Projets_de_Construction',
      description: 'Cette application web permettra à l\'équipe de construction de créer et de gérer\n' +
        'des projets de\n' +
        'construction, d\'assigner des tâches aux membres de l\'équipe, de gérer les\n' +
        'ressources nécessaires et\n' +
        'de suivre les détails des projets et des tâches. Elle offrira une interface conviviale\n' +
        'pour visualiser,\n',
      link: 'https://github.com/imaneboho2159/Application_de_Gestion_de_Projets_de_Construction'
    },


    {
      title: 'Todo + Pomodoro App',
      description: 'Task manager with local storage and Pomodoro timer.',
      link: 'https://github.com/imaneboho2159/To-Do-List-Promodoro-App',
    }
  ];
}

