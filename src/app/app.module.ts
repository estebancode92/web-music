import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EnvivoComponent } from './pages/envivo/envivo.component';
import { OnlineComponent } from './pages/online/online.component';
import { PresencialesComponent } from './pages/presenciales/presenciales.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { APP_ROUTING } from './app.routes';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EnvivoComponent,
    PresencialesComponent,
    OnlineComponent,
    NopagefoundComponent,
    HeaderComponent,
    FooterComponent,
    AcercaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
