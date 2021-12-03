import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { IonicAuthService } from './ionic-auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
  ) { }

  listeHackathon() {
    this.router.navigate(['/liste-hackathon']);
  }
  accueil() {
    this.router.navigate(['/home']);
  }
  profil() {
    this.ionicAuthService.userDetails().subscribe(response => {
      if (response !== null) {
        this.router.navigateByUrl('dashboard');
      } else {
        this.router.navigateByUrl('login');
      }
    }, error => {
      console.log(error);
    })
  }
}

