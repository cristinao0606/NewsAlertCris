import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { HeaderComponent } from './header/header.component';

import { NewsMonitoringListComponent } from './news-monitoring-list/news-monitoring-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsDetailsComponent,
    NewsItemComponent,
    HeaderComponent,
    NewsMonitoringListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
