import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Character, ICharacter } from '../models/ICharacter';
import { User } from '../models/User';
import { Renderer2 } from '@angular/core';


@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers:[ApiService]
})
export class GalleryComponent implements OnInit {

  users : User[] = [];
  characters = [] as any;
  
  

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    
    this.getAllCharacters();
    
    
  
  }


 

   getAllCharacters(){
    this.apiService.getAllCharacters().subscribe(data=>{
      this.characters = data.results;
     
    }) 
  }

 getUsers(){
   this.apiService.getUsers().subscribe(data=>{
     this.users = data;
     console.log(data);
     console.log(this.users);
   })
 }
 
}
