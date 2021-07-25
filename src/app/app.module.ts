import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { SliderComponent } from './components/slider/slider.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { PrecioProductoComponent } from './components/precio-producto/precio-producto.component';
import { SendEmailComponent } from './components/auth/send-email/send-email.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { NewProductComponent } from './components/newProduct/new.product.component';
import { NewProductFormComponent } from './components/newProduct/new.product.form.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CarritoProductoComponent } from './components/carrito-producto/carrito-producto.component';
import { SidebarCategoryComponent } from './components/sidebar/sidebar-category/sidebar-category.component';
import { SliderBrandComponent } from './components/slider-brand/slider-brand.component';
import { HomeCategoryComponent } from './components/home/home-category/home-category.component';

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
    CarritoProductoComponent,
    SidebarCategoryComponent,
    SliderBrandComponent,
    HomeCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
