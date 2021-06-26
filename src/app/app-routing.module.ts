import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductosComponent } from './productos/productos.component';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "productos", component: ProductosComponent },
    { path: "ingresar", component: LoginComponent },
    { path: "registrarse", component: RegisterComponent },
    { path: "verificar-email", component: SendEmailComponent },
    { path: "restablecer-contraseña", component: ForgotPasswordComponent },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }