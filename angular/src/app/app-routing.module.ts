import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";


const routes: Routes = [
    // {
    //   path: '',
    //   redirectTo: 'home',
    //   pathMatch: 'full',
    // },
  // {
  //   path: '404',
  //   component: P404Component,
  //   data: {
  //     title: 'Page 404'
  //   }
  // },
  // {
  //   path: '500',
  //   component: P500Component,
  //   data: {
  //     title: 'Page 500'
  //   }
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   data: {
  //     title: 'Login Page'
  //   }
  // },
  // {
  //   path: 'logout',
  //   component: LoginComponent,
  //   data: {
  //     title: 'Logout Page'
  //   }
  // },
  {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'Home'
    },
    // canActivateChild: [AuthGuardService],
    children: [
      {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule'
      },

    ]
  },
  // {path: '**', component: P404Component}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
