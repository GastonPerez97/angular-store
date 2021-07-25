import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductosComponent } from './components/productos/productos.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { SendEmailComponent } from './components/auth/send-email/send-email.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { NewProductComponent } from './components/newProduct/new.product.component';
import { CarritoComponent } from './components/carrito/carrito.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "productos", component: ProductosComponent },
    { path: "productos/:category", component: ProductosComponent },
    { path: "ingresar", component: LoginComponent },
    { path: "registrarse", component: RegisterComponent },
    { path: "verificar-email", component: SendEmailComponent },
    { path: "restablecer-contraseña", component: ForgotPasswordComponent },
    { path: "detalle/:id", component: DetalleProductoComponent},
    { path: "nuevo-producto", component: NewProductComponent},
    { path: "carrito", component: CarritoComponent},
    { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
