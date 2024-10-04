import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FetchService} from './fetch.service';
import {FormsModule} from '@angular/forms';
import {RouteReuseStrategy, RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {Comp1Component} from './comp1/comp1.component';
import {Comp2Component} from './comp2/comp2.component';
import {Comp3Component} from './comp3/comp3.component';
import {CustomRouteReuseStrategy} from './custom-route-reuse-strategy.service';

const routes: Routes = [
  {path: '', component: Comp1Component}, // default
  {path: 'comp2', component: Comp2Component},
  {path: 'comp3', component: Comp3Component}
];

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [FetchService, {
    provide: RouteReuseStrategy,
    useClass: CustomRouteReuseStrategy,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
