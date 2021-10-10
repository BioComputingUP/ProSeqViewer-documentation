import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import {DocPageComponent} from './doc-page/doc-page.component';
import {StartPageComponent} from './start-page/start-page.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';


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
        AppRoutingModule,
        FormsModule,
        HighlightModule
    ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        xml: () => import('highlight.js/lib/languages/xml'),
        typescript: () => import('highlight.js/lib/languages/typescript'),
        scss: () => import('highlight.js/lib/languages/scss'),
      }
    }
  } ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
