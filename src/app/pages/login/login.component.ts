import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';

import { RoomService } from '../../services/room.service';
import { Login } from '../../types/login.interface';
import { ResponseLogin } from '../../types/response-login.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  protected readonly loginObj: Login = {
    phone: '',
    password: '',
  };
  private readonly loginService = inject(RoomService);
  private readonly router = inject(Router);

  onLogin(): void {
    this.loginService
      .login(this.loginObj)
      .pipe(take(1))
      .subscribe({
        next: (res: ResponseLogin) => {
          if (res.result) {
            localStorage.setItem('hotelUser', JSON.stringify(res.data));
            this.router.navigate(['/dashboard']).then();
          } else {
            alert('Bad Credentials');
          }
        },
        error: err => console.log(err),
      });
  }
}
