import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/services/auth.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoComponent } from './producto/producto.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SliderComponent } from './slider/slider.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { PrecioProductoComponent } from './precio-producto/precio-producto.component';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { NewProductComponent } from './newProduct/new.product.component';
import { NewProductFormComponent } from './newProduct/new.product.form.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CarritoProductoComponent } from './carrito-producto/carrito-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductosComponent,
    ProductoComponent,
    SidebarComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    SliderComponent,
    DetalleProductoComponent,
    PrecioProductoComponent,
    SendEmailComponent,
    ForgotPasswordComponent,
    NewProductComponent,
    NewProductFormComponent,
    CarritoComponent,
    CarritoProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
