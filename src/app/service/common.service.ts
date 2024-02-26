import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public base: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public page: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public last: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public isfirstHeader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );
  public isHeaderTwo: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public isHeaderThree: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
    public isHeaderFour: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);  

  constructor(private httpService:HttpService) { }

  loginDetails: any;

  // setLoginDetails(details: any) {
  //   this.loginDetails = details.user;
  //   sessionStorage.setItem('userProfile', JSON.stringify(details.user));
  //   sessionStorage.setItem('tokens', JSON.stringify(details.tokens));
  //   this.httpService.setTokens();
  // }
  // setRefreshToken(data: any) {
  //   sessionStorage.setItem('tokens', JSON.stringify(data));
  //   this.httpService.setTokens();
  // }
}
