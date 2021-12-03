import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeHackathonPage } from './liste-hackathon.page';

const routes: Routes = [
  {
    path: '',
    component: ListeHackathonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeHackathonPageRoutingModule {}
