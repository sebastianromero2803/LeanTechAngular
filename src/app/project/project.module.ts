import { NgModule } from "@angular/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from "@angular/common";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { ProjectoComponent } from "./pages/projecto/projecto.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [InicioComponent, ProjectoComponent],
  imports: [CommonModule, FormsModule, RouterModule, NgbModule],
  exports: [InicioComponent, ProjectoComponent]
})
export class ProjectModule {}
