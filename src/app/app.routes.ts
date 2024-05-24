import { Routes } from '@angular/router';
import { InputDecorator } from '@angular/core';
import { IndexComponent } from './core/index/index.component';
import { ContacComponent } from './core/contac/contac.component';
import { HombreComponent } from './core/hombre/hombre.component';
import { MujeresComponent } from './core/mujeres/mujeres.component';
import { TeenComponent } from './core/teen/teen.component';
import { Page4Component } from './core/page-4/page-4.component';

export const routes: Routes = [
       

        {
                path: 'index',
                component: IndexComponent
        },


        {
                path: 'hombre',
                component: HombreComponent
        },

        {
                path: 'mujeres',
                component: MujeresComponent
        },

        {
                path: 'teen',
                component: TeenComponent
        },

        {
                path: 'page-4',
                component: Page4Component
        },

        {
                path: '**',
                redirectTo: '/index'
        },
];


