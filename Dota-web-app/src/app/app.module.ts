import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {TranslateModule , TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
   TranslateModule.forRoot({
    loader: {
      provide :TranslateLoader,
      useFactory: (http:HttpClient)=>{
        return new TranslateHttpLoader(http, '../assets/i18n/','.json');
      },
      deps : [HttpClient]
    }
   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
