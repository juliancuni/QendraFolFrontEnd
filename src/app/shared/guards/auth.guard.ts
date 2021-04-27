// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { Observable, of } from 'rxjs';
// import { catchError, map, take, tap } from 'rxjs/operators';
// import { AuthService } from '../services/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private _router: Router, private _authService: AuthService) {

//   }
//   canActivate(): Observable<boolean> {
//     console.log("guard!");
//     // return this._authService.isAuthenticated();
//     // return (this._authService.currentUser$) ?  true : false;
//     // if (this._authService.currentUser$) {
//     //   console.log("canActivate")
//     //   return true;
//     // } else {
//     //   console.log("cannotActivate")
//     //   this._router.navigate(["login"]);
//     //   return false;
//     // }
//     return this._authService.currentUser$.pipe(
//       map((user) => {
//         (!!user) ? null : this._router.navigate(["login"]);
//         return !!user
//       }), catchError((err) => {
//         return of(false);
//       })
//     )
//     // this._authService.currentUser$.subscribe((user) => {
//     //   if(user) return true;
//     //   return false;
//     // })
//   }

// }
