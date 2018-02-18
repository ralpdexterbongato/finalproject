import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AtbashComponent } from './atbash/atbash.component';
import { PlayfairComponent } from './playfair/playfair.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
    data: { title: 'Home' }
  },
  {
    path: 'atbash',
    component: AtbashComponent,
    data: { title:'Atbash'}
  },
  {
    path: 'playfair',
    component: PlayfairComponent,
    data: { title:'Playfair'}
  },
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AtbashComponent,
    PlayfairComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
