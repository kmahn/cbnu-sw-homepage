import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroOrganizationPageComponent } from './intro-organization-page/intro-organization-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/organization/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroOrganizationPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule {
}
