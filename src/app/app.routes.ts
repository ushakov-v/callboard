import {Routes} from '@angular/router';
import {MainPage} from '../pages/main-page/main-page';

export const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainPage},
];
