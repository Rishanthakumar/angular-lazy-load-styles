import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import { Feature1Component } from './feature1.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';


@NgModule({
  declarations: [
    Feature1Component,
    Component1Component,
    Component2Component
  ],
  imports: [
    CommonModule,
    Feature1RoutingModule
  ]
})
export class Feature1Module { }
