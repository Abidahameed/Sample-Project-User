import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { PantcollectionComponent } from './pantcollection/pantcollection.component';
import { JeeanscollectionComponent } from './jeeanscollection/jeeanscollection.component';

import { TopcollectionComponent } from './topcollection/topcollection.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ViewpageComponent } from './viewpage/viewpage.component';
import { FormsModule } from '@angular/forms';
import { BuynowComponent } from './buynow/buynow.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './cart.service';
import { TopsService } from './tops.service';
import { CategoryService } from './category.service';
import { JeeansService } from './jeeans.service';
import { PantsService } from './pants.service';
import { UserService } from './user.service';



const routes:Routes = [


  {path:'',component:HomeComponent },
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent },
  
  {path:'topcollection',component:TopcollectionComponent},
  {path:'jeeanscollection',component:JeeanscollectionComponent},
  {path:'pantcollection',component:PantcollectionComponent},
  {path:'addtocart',component:AddtocartComponent},
  {path:'viewpage',component:ViewpageComponent},
  { path:'buynow', component: BuynowComponent },
  { path:'home', component: HomeComponent },
  { path:'category', component: CategoryComponent },
  
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    LoginComponent,
    AddtocartComponent,
    PantcollectionComponent,
    JeeanscollectionComponent,
  
    TopcollectionComponent,
    ViewpageComponent,
    BuynowComponent,
    CategoryComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports:[RouterModule],
  providers: [ CartService,TopsService,JeeansService,PantsService
],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(public dialog: MatDialog,
    private cartService: CartService,
   private tops:TopsService,
   private category:CategoryService,
   private jeans:JeeansService ,
   private pants:PantsService,
   private user:UserService,
  ){
   
  }
}
