import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SpeciaEventsComponent } from './specia-events/specia-events.component';
const routes: Routes = [
 {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'specials',
    component: SpeciaEventsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
