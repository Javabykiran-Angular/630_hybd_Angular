import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { FollowerComponent } from './follower/follower.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';

const routes: Routes = [
  {
    path:"Page1",component:Page1Component
  },
  {
    path:"Follower",component:FollowerComponent
  },
  {
    path:"myFollower",component:MyfollowerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
