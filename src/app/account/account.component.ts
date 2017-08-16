import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from './account.service';
declare var $: any;
@Component({
  selector: 'app-account',
  providers: [],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  isShowErr: boolean = false;
  public signInFormModel: FormGroup;
  public signUpFormModel: FormGroup;
  constructor(public fb: FormBuilder, public router: Router, private accountService: AccountService) { }

  ngOnInit() {
    this.formInit();
  }
  signUp() { // 登录
    const that = this;
    if (!this.signUpFormModel.valid) {
      return;
    }
    $.ajax({
      type: 'post',
      url: 'http://127.0.0.1:3000/blog/signUp',
      data: this.signUpFormModel.value,
      success: function(data){
        console.log(data);
        if ( data.result === 0) {
          that.accountService.isSignIn = true;
          sessionStorage.setItem('username', that.signUpFormModel.value.name);
          that.router.navigate(['blog']);
        } else {
          that.isShowErr = true;
        }
      }
    });
  }
  signIn() { // 注册
    const that = this;
    if (this.signInFormModel.value.password !== this.signInFormModel.value.repwd || !this.signInFormModel.valid) {
      return;
    }
    $.ajax({
      type: 'post',
      url: 'http://127.0.0.1:3000/blog/signIn',
      data: this.signInFormModel.value,
      success: function(data){
        console.log(data);
      }
    });
  }
  remember() {
    document.cookie =
      `name=${this.signUpFormModel.value.name}
      ; password=${this.signUpFormModel.value.password}
      ; expires=${new Date().getTime() + 60 * 24 * 60 * 60 * 1000 }`;
  }
  formInit() {
    this.signInFormModel = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^.{3,30}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{6,16}$/)]],
      repwd: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{6,16}$/)]],
      email: ['', [Validators.required, Validators.
      pattern(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)]]
    });
    this.signUpFormModel = this.fb.group({
      password: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]{6,16}$/)]],
      name: ['', [Validators.required, Validators.pattern(/^.{3,30}$/)]]
    });
  }
}
