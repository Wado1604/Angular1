import { Routes } from '@angular/router';
import { InputDecorator } from '@angular/core';
import { IndexComponent } from './core/index/index.component';
import { ContacComponent } from './core/contac/contac.component';

export const routes: Routes = [
        {path: "", title: "index", component: IndexComponent},
        {path: "index", title: "index", component: IndexComponent}
];
