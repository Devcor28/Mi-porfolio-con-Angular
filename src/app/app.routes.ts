import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ProjectsComponent } from './paginas/projects/projects.component';
import { ContactComponent } from './paginas/contact/contact.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', redirectTo: '', pathMatch:'full'}
];
