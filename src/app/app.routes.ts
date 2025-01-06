import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/data-binding',
    pathMatch: 'full',
  },

  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'ng-if',
    component: NgIfComponent,
  },
  {
    path: 'ng-for',
    component: NgForComponent,
  },
];
