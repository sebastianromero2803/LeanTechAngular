import { Injectable } from "@angular/core";
import { User } from "src/app/project/interfaces/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _usuarios: User[] = [];

  get usuarios(): User[] {
    return [...this._usuarios];
  }

  agregarUsuario(usuario: User): void {
    this._usuarios.push(usuario);
  }
}
