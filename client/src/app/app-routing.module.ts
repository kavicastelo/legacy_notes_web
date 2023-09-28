import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./components/auth/auth.component";
import {CreateComponent} from "./components/create/create.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {NotesComponent} from "./components/pages/notes/notes.component";
import {AddNoteComponent} from "./components/pages/notes/add-note/add-note.component";
import {ViewNoteComponent} from "./components/pages/notes/view-note/view-note.component";
import {AuthGuard} from "./guards/auth.guard";
import {ImagesComponent} from "./components/pages/images/images.component";

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'create', component: CreateComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'notes', component: NotesComponent, canActivate: [AuthGuard]},
  {path: 'add-note', component: AddNoteComponent, canActivate: [AuthGuard]},
  {path: 'view-note/:id', component: ViewNoteComponent, canActivate: [AuthGuard]},
  {path: 'images', component: ImagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
