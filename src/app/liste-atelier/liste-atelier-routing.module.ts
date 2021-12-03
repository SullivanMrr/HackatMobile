import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeAtelierPage } from './liste-atelier.page';

const routes: Routes = [
  {
    path: '',
    component: ListeAtelierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeAtelierPageRoutingModule {}
