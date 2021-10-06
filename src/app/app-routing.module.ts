import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {DocPageComponent} from './doc-page/doc-page.component';
import {DemoPageComponent} from './demo-page/demo-page.component';
import {StartPageComponent} from './start-page/start-page.component';


@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(
          [
              {path: '', component: HomePageComponent},
              {path: 'doc', component: DocPageComponent},
              {path: 'demo', component: DemoPageComponent},
              {path: 'start', component: StartPageComponent}
          ]
      )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
