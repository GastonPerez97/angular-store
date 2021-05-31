import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "productos", component: ProductosComponent},
    { path: "ingresar", component: LoginComponent},
    { path: "registrarse", component: RegisterComponent},
    { path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }