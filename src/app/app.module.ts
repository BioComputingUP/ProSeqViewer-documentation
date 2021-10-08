import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
// import { TabsModule } from 'ngx-bootstrap/tabs';
import {DocPageComponent} from './doc-page/doc-page.component';
import {StartPageComponent} from './start-page/start-page.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
      AppComponent,
      HomePageComponent,
      DocPageComponent,
      StartPageComponent,
      NavbarComponent,
      FooterComponent
  ],
    imports: [
        BrowserModule,
        // TabsModule.forRoot(),
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
