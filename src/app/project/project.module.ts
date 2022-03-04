import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProjectoComponent } from './pages/projecto/projecto.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InicioComponent,
    ProjectoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    InicioComponent
  ]
})
export class ProjectModule { }
