import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { Server1Component } from './server1/server1.component';
import { StoreComponent } from './store/store.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarComponent } from './shared/star.component';
import { converToSpacesPipe } from './shared/convertToSpaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductdetailsComponent } from './store/productdetails.component';

import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Server1Component,
    StoreComponent,
    StarComponent,
    converToSpacesPipe,
    ProductdetailsComponent,
    HomeComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'servers' , component: ServerComponent},
      {path : 'products' , component: StoreComponent},
      {path: 'products/:id', component: ProductdetailsComponent},
      {path : 'welcome', component: HomeComponent},
      {path:'', redirectTo: 'welcome', pathMatch:'full'},
      {path:'**', redirectTo: 'welcome', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
