import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutmeComponent } from './component/aboutme/aboutme.component';

const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'contact',
        component: ContactComponent
    },
    {
        path:'aboutme',
        component: AboutmeComponent
    },
    {
        path:'footer',
        component: HomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
