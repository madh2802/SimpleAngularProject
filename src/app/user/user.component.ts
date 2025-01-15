import { Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // @Input({required:true}) id !: string;
  // @Input({required:true}) avatar !: string;
  // @Input({required:true}) name !: string;

  @Input({required:true}) user !: User;
  @Input({required: true}) selected !: boolean;
  @Output() select = new EventEmitter<string>();

  //using getter to get the value of the image path
  get imagePath(){
    return '/assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
   

}
