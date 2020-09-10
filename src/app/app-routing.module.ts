import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Feature1Module } from './features/feature1/feature1.module';

const routes: Routes = [
  {
    path: 'feature1',
    loadChildren: () => import('./features/feature1/feature1.module').then(m => m.Feature1Module),
    pathMatch: 'prefix'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
