import { Injectable } from '@angular/core';
import { UserRole } from '../UserRole';

@Injectable({
  providedIn: 'root'
})
export class loginService {
  private userRole: UserRole | null = null;

  constructor() {}

  setUserRole(role: UserRole): void {
    this.userRole = role;
  }

  getUserRole(): UserRole | null {
    return this.userRole;
  }
}