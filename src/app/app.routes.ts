import { Routes } from '@angular/router';

import { BookingCalenderComponent } from './pages/booking-calender/booking-calender.component';
import { BookingListComponent } from './pages/booking-list/booking-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NewBookingComponent } from './pages/new-booking/new-booking.component';
import { RoomsComponent } from './pages/rooms/rooms.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'rooms',
        component: RoomsComponent,
      },
      {
        path: 'new-booking',
        component: NewBookingComponent,
      },
      {
        path: 'bookings',
        component: BookingListComponent,
      },
      {
        path: 'booking-calender',
        component: BookingCalenderComponent,
      },
    ],
  },
];
