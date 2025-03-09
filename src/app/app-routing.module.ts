import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IcdInfoComponent} from "./icd-info/icd-info.component";

const routes: Routes = [
  {
    path: '',
    component: IcdInfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
