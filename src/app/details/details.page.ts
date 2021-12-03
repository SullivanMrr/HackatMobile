import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  ListeAtelier :any;
  item="";
 
  constructor(private router: Router,
              private activeRoute : ActivatedRoute, private http: HttpClient, ) {
                this.http.get("http://localhost:8000/getAtelier")
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

               

  ngOnInit() {
  }

  listeAtelier(item){
      let NavigationExtras: NavigationExtras = {
        state : {
          param1:item
        }
      }
      this.router.navigate(['/liste-atelier'], NavigationExtras);
    }


}
