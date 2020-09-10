import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Feature1Component } from './feature1.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

const routes: Routes = [
  {
    path: '',
    component: Feature1Component,
    children: [
      { path: 'component1', component: Component1Component },
      { path: 'component2', component: Component2Component }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature1RoutingModule { }
