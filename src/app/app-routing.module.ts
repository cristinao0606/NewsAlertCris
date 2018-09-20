import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { NewsListComponent } from './newsPressMonitoring/news-list/news-list.component';
import { NewsDetailsComponent } from './newsPressMonitoring/news-details/news-details.component';
import { NewsMonitoringListComponent } from './newsPressMonitoring/news-monitoring-list/news-monitoring-list.component';



const appRoutes: Routes = [

    {path: '', redirectTo: '/news-list', pathMatch: 'full'},
    {path: 'news-list', component: NewsListComponent, children: [
        {path: '', component: NewsListComponent},
        {path: 'title', component: NewsDetailsComponent},

    ]},
    {path: 'newsmonitoring-list', component: NewsMonitoringListComponent},

];
@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {

}
