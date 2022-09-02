import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

import { NotpagesfoundComponent } from './pages/notpagesfound/notpagesfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: NotpagesfoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule, 
    PagesRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
