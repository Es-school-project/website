import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  users = [
    {username: 'root', password: 'acces'},
    {username: 'nathan', password: 'password1'},
    {username: 'maxime', password: 'password2'},
    {username: 'noé', password: 'password3'},
    {username: 'climane', password: 'password4'}
  ];

  constructor(private router: Router) { }

  submit() {
    const user = this.users.find(u => u.username === this.username && u.password === this.password);
    if (user) {
      this.router.navigate(['/admin/dashboard']);
    } else {
      this.router.navigate(['/home']);
    }
  }

}
