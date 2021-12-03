import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ListeArret: any;
  
  constructor(private http: HttpClient, private router:Router) {
    this.http.get("http://localhost:8000/getHackathon")
      .subscribe(results => {
        this.ListeArret = results;
      })
  }

  listehackathon(item){
    let NavigationExtras: NavigationExtras = {
      state : {
        param1:item
      }
    }
    this.router.navigate(['/liste-hackathon'], NavigationExtras);
  }
  accueil(){
    this.router.navigate(['/home']);
  }
}


