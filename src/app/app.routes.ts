import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TasklistComponent } from './components/task/tasklist/tasklist.component';
import { TaskresumeComponent } from './components/task/taskresume/taskresume.component';

export const routes: Routes = [
    {path:'home', component:TaskresumeComponent},
    {path:'list', component:TasklistComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}];
