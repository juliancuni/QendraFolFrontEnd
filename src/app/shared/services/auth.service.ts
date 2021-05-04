import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoginDto, UserDto } from '../sdk/models';
import { AccountService } from '../sdk/services';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    //   private currentUserSource = new ReplaySubject<UserDto>(1);
    //   currentUser$ = this.currentUserSource.asObservable();

    constructor() { }

    getToken(): string {
        let userStringified = localStorage.getItem('user');
        if (userStringified) {
            let user = JSON.parse(userStringified);
            return user.token
        }
        return null;
    }

    //   login(userDto: UserDto): Observable<boolean> {
    //     return this._accountService.apiAccountLoginPost$Json({ body: userDto }).pipe(
    //       map((user: UserDto) => {
    //         if (!!user) {
    //           localStorage.setItem('user', JSON.stringify(user));
    //           this.setCurrentUser(user);
    //           return true;
    //         }
    //         return false;
    //       }), catchError((err) => {
    //         return of(false);
    //       })
    //     );
    //   }

    //   logout(): void {
    //     localStorage.removeItem('user');
    //     this.currentUserSource.next(null);
    //   }

    //   setCurrentUser(user: UserDto): void {
    //     this.currentUserSource.next(user);
    //   }

    //   isAuthenticated(): Observable<boolean> {
    //     return this.currentUser$.pipe(
    //       map((user) => {
    //         if (user !== null) {
    //           console.log("ok go to home")
    //           return true;
    //         } else {
    //           console.log("redirect")
    //           return false;
    //         }
    //       })
    //     );
    //   };

}
