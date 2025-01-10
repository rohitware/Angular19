import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { SignalComponent } from './components/signal/signal.component';
import { GetApiComponent } from './Api/get-api/get-api.component';

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
  {
    path: "signal",
    component: SignalComponent
  },

  {
    path: 'get-api',
    component: GetApiComponent
  }
];
