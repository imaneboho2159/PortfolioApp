import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
