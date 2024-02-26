import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { routes } from 'src/app/core/helpers/routes/routes';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})

export class FooterComponent implements OnInit {
  user:any;
  isLogIn:boolean=false;
  public routes = routes;

  constructor(public router: Router,private httpService:HttpService){
    // this.user = JSON.parse(sessionStorage.getItem('userProfile')!);
    // if (!this.user) {
    //   this.isLogIn = false;
    //   this.router.navigate(['login']);
    // } else {
    //   this.isLogIn = true;
    // }

  }
  ngOnInit() {
    AOS.init({disable:'mobile'});
  //  after Login used
      this.httpService.getLoggedIn().subscribe((res: boolean) => {
        this.isLogIn = res;
        if (this.isLogIn) {
          this.user = JSON.parse(sessionStorage.getItem('userProfile')!);
        }
      })
    }
    
  }
  

