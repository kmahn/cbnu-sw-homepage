import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwEducationPageComponent } from './sw-education-page/sw-education-page.component';
import { EasyCoursePageComponent } from './pages/easy-course-page/easy-course-page.component';


const routes: Routes = [
  {
    path: '', component: SwEducationPageComponent, children: [
      { path: '', redirectTo: '/sw-edu/easy', pathMatch: 'full' },
      { path: 'easy', component: EasyCoursePageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwEducationRoutingModule {
}
