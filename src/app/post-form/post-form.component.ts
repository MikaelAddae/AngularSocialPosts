import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  display:boolean=false;
  @Input() addPost:Post = {title:"", thought:""}


  @Output() newPost = new EventEmitter<Post>();
  submitPost():void{
    this.display = false; 
    this.newPost.emit(this.addPost);
  
  }

}
