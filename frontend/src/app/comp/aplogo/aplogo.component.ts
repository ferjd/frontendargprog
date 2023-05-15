import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-aplogo',
  templateUrl: './aplogo.component.html',
  styleUrls: ['./aplogo.component.css']
})
export class AplogoComponent implements OnInit {
  isLogged =false;

  constructor(private router:Router, private tokenService: TokenService){}

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }
  login(){
    this.router.navigate(['/login'])
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

}
