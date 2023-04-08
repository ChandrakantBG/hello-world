import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { QueryparameterComponent } from './queryparameter/queryparameter.component';
import { FollowerComponent } from './follower/follower.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {
   path:"",component:HomeComponent
  },
  {
  path:"page1",component:Page1Component
},
{
  path:"page2/:id",component:Page2Component
},
{
  path:"page3/:id/:username",component:Page3Component
},

{
  path:"follower",component:FollowerComponent
},
{
  path:"myfollower",component:MyfollowerComponent
},
{
  path:"queryparameter",component:QueryparameterComponent
},
{
path:"user",loadChildren:()=>import('./user/user.module').then(m=>UserModule)
},

{
  path:"**",component:NotfoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
