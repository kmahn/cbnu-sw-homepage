import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroOssCenterPageComponent } from './intro-oss-center-page/intro-oss-center-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/oss/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroOssCenterPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OssCenterRoutingModule {
}
