import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liste-hackathon',
  templateUrl: './liste-hackathon.page.html',
  styleUrls: ['./liste-hackathon.page.scss'],
})
export class ListeHackathonPage {
  Listehackathon: any;
  ListehackathonAff: any;
  listeVille = [];
  constructor(private http: HttpClient, private router: Router) {
    this.http.get("http://localhost:8000/getHackathon")
      .subscribe(results => {
        var tmp: any = [];
        tmp = results;
        this.Listehackathon = results;
        this.ListehackathonAff = results;
        tmp.forEach(element => {
          this.listeVille.push(element.ville);

          
          
        })
        var lstv = this.listeVille
       this.listeVille = lstv.filter(function(element , pos){
          return lstv.indexOf(element) == pos;
        
      })
      
    }); 
      

      
  }

  onChange(e) {
    console.log(e.target.value);
    this.ListehackathonAff = []
    this.Listehackathon.forEach(element => {
      if (element.ville == e.target.value) this.ListehackathonAff.push(element);
    });


  }

  details(item) {
    let NavigationExtras: NavigationExtras = {
      state: {
        param1: item
      }
    }
    this.router.navigate(['/details'], NavigationExtras);
  }


}
