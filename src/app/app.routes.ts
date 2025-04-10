// src/app/app.routes.ts or wherever your routes are defined
import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component'; // adjust path if needed

export const routes: Routes = [
  { path: 'contact', component: ContactComponent },
];
