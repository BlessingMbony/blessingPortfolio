import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from "@angular/material";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { AboutmeComponent } from './component/aboutme/aboutme.component';
import { FooterComponent } from './component/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    AboutmeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
