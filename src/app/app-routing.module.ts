import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './core/pages/home-page/home-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'organization', loadChildren: './pages/organization/organization.module#OrganizationModule' },
  { path: 'major', loadChildren: './pages/major-education-center/major-education-center.module#MajorEducationCenterModule' },
  { path: 'basic', loadChildren: './pages/basic-education-center/basic-education-center.module#BasicEducationCenterModule' },
  {
    path: 'cooperation',
    loadChildren: './pages/industry-academic-cooperation-center/industry-academic-cooperation-center.module#IndustryAcademicCooperationCenterModule'
  },
  {
    path: 'convergence',
    loadChildren: './pages/convergence-education-center/convergence-education-center.module#ConvergenceEducationCenterModule'
  },
  { path: 'oss', loadChildren: './pages/oss-center/oss-center.module#OssCenterModule' },
  { path: 'notice', loadChildren: './pages/notice/notice.module#NoticeModule' },
  { path: 'forms', loadChildren: './pages/app-forms/app-forms.module#AppFormsModule' },
  { path: 'account', loadChildren: './pages/account/account.module#AccountModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
