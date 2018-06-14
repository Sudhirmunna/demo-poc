import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormFieldComponent } from './form/form-field-overview-example';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { WalkinFormComponent } from './walkin-form/walkin-form.component';

const appRoutes: Routes = [
    { path: '', component: FormFieldComponent },
    { path: 'login', component: FormFieldComponent },
    { path: 'home', component: HomeComponent, children:
    [
        { path: 'users', component: UsersComponent },
        { path: 'forms', component: WalkinFormComponent }
    ]},

    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);
