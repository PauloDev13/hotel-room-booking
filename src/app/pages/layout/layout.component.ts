import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  protected readonly loggedUser = signal<string>('');
  private readonly router = inject(Router);

  constructor() {
    const storageData = localStorage.getItem('hotelUser');
    if (storageData) {
      this.loggedUser.set(JSON.parse(storageData)?.userName);
    }
  }

  onLogoff(): void {
    this.router.navigate(['/login']).then(res => {
      if (res) {
        localStorage.removeItem('hotelUser');
        this.loggedUser.set('');
      }
    });
  }
}
