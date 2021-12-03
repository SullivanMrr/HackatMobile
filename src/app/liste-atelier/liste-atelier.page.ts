import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liste-atelier',
  templateUrl: './liste-atelier.page.html',
  styleUrls: ['./liste-atelier.page.scss'],
})
export class ListeAtelierPage {
  ListeAtelier :any;
  item2:any;
  item="";
  constructor(private router: Router,
              private activeRoute : ActivatedRoute, private http: HttpClient, ) {
                this.http.get("http://localhost:8000/getAtelier/"+this.item2.idHackae)
                .subscribe(results => {
                  this.ListeAtelier = results;
                })
      this.activeRoute.queryParams.subscribe(params =>{
        if (this.router.getCurrentNavigation().extras.state) {
          this.item = 
          this.router.getCurrentNavigation().extras.state.param1;
         
        }
      });
               }

};