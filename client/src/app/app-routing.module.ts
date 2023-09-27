import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./components/auth/auth.component";
import {CreateComponent} from "./components/create/create.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {NotesComponent} from "./components/pages/notes/notes.component";
import {AddNoteComponent} from "./components/pages/notes/add-note/add-note.component";
import {ViewNoteComponent} from "./components/pages/notes/view-note/view-note.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'create', component: CreateComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'notes', component: NotesComponent},
  { path: 'add-note', component: AddNoteComponent },
  { path: 'view-note/:id', component: ViewNoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
