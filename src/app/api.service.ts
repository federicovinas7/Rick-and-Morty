import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICharacter } from './models/ICharacter';
import { User } from './models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
 
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }

  getAllCharacters(): Observable<ICharacter>{
      return this.httpClient.get<ICharacter>("https://rickandmortyapi.com/api/character");
}
 getSingleCharacter() :Observable<ICharacter>{
   return this.httpClient.get<ICharacter>("https://rickandmortyapi.com/api/character/2");
 }
 getUsers() :Observable<User[]>{
   return this.httpClient.get<User[]>("https://jsonplaceholder.typicode.com/todos/");
 }

}
