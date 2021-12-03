import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IonicAuthService } from '../ionic-auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  userForm: FormGroup;
  successMsg: string = '';
  errorMsg: string = '';
  

  error_msg = {
    'nom': [
      { 
        type: 'required', 
        message: 'Nom requis.' 
      }
    ],
    'prenom': [
      { 
        type: 'required', 
        message: 'Prénom requis.' 
      }
    ],
    'Portfolio': [
      { 
        type: 'required', 
        message: 'Portfolio requis.' 
      }
    ],
    'numTel': [
      { 
        type: 'required', 
        message: 'Téléphone requis.' 
      }
    ],
    'dateNaiss': [
      { 
        type: 'required', 
        message: 'Date de naissance requis.' 
      }
    ],
    'mail': [
      { 
        type: 'required', 
        message: 'Mail requis' 
      },
      { 
        type: 'pattern', 
        message: 'Email non valide' 
      }
    ],
    'Password': [
      { 
        type: 'required', 
        message: 'Mot de passe requis' 
      },
      { 
        type: 'minlength', 
        message: 'Password length should be 6 characters long.' 
      }
    ]
  };

  constructor(
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      nom: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      prenom: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      mail: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      dateNaiss: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      numTel: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      Portfolio: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      Password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  signUp(value) {
    console.log(value);
    this.ionicAuthService.createUser(value)
      .then((response) => {
        this.errorMsg = "";
        this.successMsg = "Utilisateur créer avec succès !";
        this.router.navigateByUrl('login');
        console.log(response);
        var httpHeader = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json',"Accept": 'application/json' })
        };
        //Localhost
        this.http.post("http://localhost:8000/setInscription", value,httpHeader)
          .subscribe(res => {
            console.log(res);
          })
          ;
      }, error => {
        this.errorMsg = error.message;
        this.successMsg = "";
      })
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }

}