import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormFieldComponent } from './form/form-field-overview-example';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
    { path: '', component: FormFieldComponent },
    { path: 'login', component: FormFieldComponent },
    { path: 'home', component: HomeComponent, children:
    [
        { path: 'users', component: UsersComponent }
    ]},

    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);
