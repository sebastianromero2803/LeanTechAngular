import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from './project/pages/inicio/inicio.component';
import { ProjectoComponent } from './project/pages/projecto/projecto.component';

const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        pathMatch: 'full'
    },
    {
        path: 'project',
        component: ProjectoComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}