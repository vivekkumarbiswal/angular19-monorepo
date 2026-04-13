import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    email: '',
    password: '',
  };

  apiLoginObj: any = {
    username: '',
    password: '',
  };

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  onLogin() {
    // debugger;
    // if (this.loginObj.email === 'admin' && this.loginObj.password == '123') {
    //   this.router.navigateByUrl('cards');
    // } else {
    //   alert('Wrong Credentials');
    // }
    debugger;
    this.http
      .post<any>('http://localhost:3000/login', this.apiLoginObj)
      .subscribe(
        (res) => {
          localStorage.setItem('User', res.user.id);
          this.router.navigate(['/cards']);
        },
        (error) => {
          alert('Worng Credentials');
        },
      );
    console.log(this.apiLoginObj);
  }
}
