import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';

// const appRoutes: Routes = [     
//   { path: '', component: NewsFeedComponent }
//       // { path: ':category', component: NewsFeedComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
