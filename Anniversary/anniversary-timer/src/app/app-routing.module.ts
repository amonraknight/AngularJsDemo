import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerpageComponent } from './timerpage/timerpage.component'

const routes: Routes = [
  { path: '', redirectTo: '/timerpage', pathMatch: 'full' },
  { path: 'timerpage', component: TimerpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
