import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RandomService {

  public getRandomNumber(): number {
    return Math.floor(Math.random() * 100);
  }

}
