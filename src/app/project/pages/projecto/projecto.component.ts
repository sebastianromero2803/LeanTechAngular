import { Component } from "@angular/core";
import { User } from "src/app/project/interfaces/user.model";
import { UserService } from "src/app/project/services/user.service";

@Component({
  selector: "app-projecto",
  templateUrl: "./projecto.component.html",
  styleUrls: ["./projecto.component.css"]
})
export class ProjectoComponent {

  usuarios: User[] = []

  usuarioNuevo: User = {
    nombre: "",
    apellidos: "",
    correo: "",
    lugar_nacimiento: "",
    inicio_de_trabajo: new Date(),
    finalizacion_de_trabajo: new Date(),
    nombre_jefe: "",
    telefono_jefe: 0
  };

  constructor(private servicio: UserService) {}

  agregar(): void {
    if (this.usuarioNuevo.nombre.trim().length === 0) {
      return;
    }
  
    this.servicio.agregarUsuario(this.usuarioNuevo);
    this.usuarioNuevo = {
      nombre: "",
      apellidos: "",
      correo: "",
      lugar_nacimiento: "",
      inicio_de_trabajo: new Date(),
      finalizacion_de_trabajo: new Date(),
      nombre_jefe: "",
      telefono_jefe: 0
    };

    this.usuarios = this.servicio.usuarios;
  }
}
