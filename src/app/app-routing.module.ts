import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PantcollectionComponent } from './pantcollection/pantcollection.component';
import { JeeanscollectionComponent } from './jeeanscollection/jeeanscollection.component';

import { TopcollectionComponent } from './topcollection/topcollection.component';


const routes:Routes = [

  {path:'topcollection',component:TopcollectionComponent},
  {path:'jeeanscollection',component:JeeanscollectionComponent},
  {path:'pantcollection',component:PantcollectionComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) ],
    exports: [RouterModule]

})
export class AppRoutingModule { }
