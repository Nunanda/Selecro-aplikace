import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';
import { environment } from 'src/environments/environment.prod';
import * as sha256 from 'crypto-js/sha256';

@Component({
  selector: 'app-prihlaseni',
  templateUrl: './prihlaseni.page.html',
  styleUrls: ['./prihlaseni.page.scss'],
})
export class PrihlaseniPage implements OnInit {
  email: string;
  password: string;
  passwordToggleIcon = "eye";
  showPassword: boolean;
  usernameRegEx = new RegExp('^[a-zA-Z0-9_.-]{4,20}$');
  emailRegEx = new RegExp('[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}');
  passwordRegEx = new RegExp('^[a-zA-Z0-9?!.,_-]{8,20}$');

  constructor(private router: Router, private loadingController: LoadingController) { }

  ngOnInit() {
  }

  public usernameCheck(): boolean {
    return this.usernameRegEx.test(this.email);
  }

  public emailCheck(): boolean {
    return this.emailRegEx.test(this.email);
  }

  public passwordCheck(): boolean {
    return this.passwordRegEx.test(this.password);
  }

  public togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    }
    else {
      this.passwordToggleIcon = 'eye';
    }
  }

  public async login() {
    if ((this.emailCheck() || this.usernameCheck())) {
      const body = {
        email: this.email,
        passwordHash: sha256(this.password).toString(),
      };
      delete this.password;
      const loading = await this.loadingController.create({
        message: 'Please wait...',
      });
      try {
        await loading.present();
        axios.post(environment.APIHOST + ':' + Number(environment.APIPORT) + '/users/login', body).then(response => {
          this.router.navigateByUrl('/home');
        }).catch(error => {
          //Tady bude kus kodu od Anet
          ///console.error(error);
        });
        await loading.dismiss();
      }
      catch(error) {
        //Tady bude kus kodu od Anet
        ///console.error(error);
      }
      await loading.dismiss();
    }
    else if (!this.emailCheck()) {
      //Tady bude kus kodu od Anet
    }
    else if (!this.usernameCheck()) {
      //Tady bude kus kodu od Anet
    }
    else if (!this.passwordCheck()) {
      //Tady bude kus kodu od Anet
    }
  }
}