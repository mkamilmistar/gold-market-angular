import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlatinumComponent } from './pages/platinum/platinum.component';
import { GoldComponent } from './pages/gold/gold.component';
import { SilverComponent } from './pages/silver/silver.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { WrongRouteComponent } from './pages/wrong-route/wrong-route.component';
import { EventComponent } from './pages/event/event.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  {
    path: "login",    
    component: LoginComponent
  },
  {
    path: "register",    
    component: RegisterComponent
  },
  {
    path: "home",    
    component: HomeComponent
  },
  {
    path: "platinum",    
    component: PlatinumComponent
  },
  {
    path: "gold",    
    component: GoldComponent
  },
  {
    path: "silver",    
    component: SilverComponent
  },
  {
    path: "event",    
    component: EventComponent
  },
  {
    path: "about",    
    component: AboutComponent
  },
  {
    path: "contact",    
    component: ContactComponent
  },
  // { 
  //   path: "**", 
  //   pathMatch: '', 
  //   component: WrongRouteComponent
  // },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  }
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
    HomeModule
  ]
})
export class AppRoutingModule { }
