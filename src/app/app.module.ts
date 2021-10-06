import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {DocPageComponent} from './doc-page/doc-page.component';
import {StartPageComponent} from './start-page/start-page.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
      AppComponent,
      HomePageComponent,
      DocPageComponent,
      StartPageComponent
  ],
    imports: [
        BrowserModule,
        TabsModule.forRoot(),
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
