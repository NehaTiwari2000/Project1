
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemocarComponent } from './democar/democar.component';

const routes: Routes = [
  {path:"demo-car-loan",component:DemocarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
