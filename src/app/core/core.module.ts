import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
import { MatListModule } from '@angular/material';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, HeaderComponent, HomePageComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatListModule,
  ],
  exports: [NavbarComponent, FooterComponent, HeaderComponent, HomePageComponent],
  providers: [
    { provide: COMPOSITION_BUFFER_MODE, useValue: false },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoreModule { }
