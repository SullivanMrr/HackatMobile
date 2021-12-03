import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeHackathonPageRoutingModule } from './liste-hackathon-routing.module';

import { ListeHackathonPage } from './liste-hackathon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeHackathonPageRoutingModule
  ],
  declarations: [ListeHackathonPage]
})
export class ListeHackathonPageModule {}
