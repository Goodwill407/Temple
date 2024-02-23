import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/helpers/routes/routes';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:any=FormGroup;
  submitted:boolean=false;

  loginModel:any
  isLoading: boolean = false

  public routes = routes;
  public Toggledata = true;

  constructor(public router:Router,private httpService:HttpService,private fb:FormBuilder){}

  ngOnInit(){
    this.Inisilizevalidations()
    
  }

  Inisilizevalidations(){
    this.loginForm=this.fb.group({
      userName: new FormControl(''),
      password: new FormControl('')
    })
  }

  // checkIfAlreadyLogin() {
  //   const user = JSON.parse(sessionStorage.getItem('userProfile') || '{}');
  //   if (user && user.id) {
  //     if (user.role == "superadmin") {
  //       this.router.navigateByUrl('/superadmin/survey-detail');
  //     } else if (user.role == 'surveyadmin') {
  //       this.router.navigateByUrl('/surveyadmin/survey-dashboard');
  //     } else if (user.role == 'block' || user.role == 'district' || user.role == 'division') {
  //       this.router.navigateByUrl('/block-coordinator/projects');
  //     } else if (user.role == 'SME') {
  //       this.router.navigateByUrl('/sme-coordinator/project');
  //     }
  //   } else {
  //     this.httpService.setLoggedIn(false);
  //   }
  // }

  submitForm(){
    this.submitted=true;
    if(this.loginForm.Invalid){
      return
    }
    else{
      this.login()
    }
  }

  login() {
    // this.isLoading = true
    this.loginModel = this.loginForm.value;
    // this.spinner.show();
    this.httpService.post('user/login', this.loginModel).subscribe((data: any) => {
      if (data) {
        if (data.roleId == 'user') {
          alert('user not assigned')
          // this.messageService.add({ severity: 'error', summary: 'Role has not been assigned', detail: '' });
        } else {
          // this.messageService.add({ severity: 'success', summary: 'Success fully Login', detail: '' });
          // this.communicationService.setLoginDetails(data);
          this.httpService.setLoggedIn(true);
          this.router.navigateByUrl('home/home-one');
          
        }
        // this.isLoading = false;
        // this.spinner.hide()
      }
    }, (error) => {
      // this.spinner.hide()
      // this.messageService.add({ severity: 'error', summary: 'Invalid Email Or Password', detail: '' });
      // this.isLoading = false;
    })
  }

  path(){
    this.router.navigate([routes.dashboard])
  }
  iconLogle() {
    this.Toggledata = !this.Toggledata;
     
  }
}


 

