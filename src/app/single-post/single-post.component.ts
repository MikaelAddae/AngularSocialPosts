import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
  
  @Input() onePost:Post = {title:"", thought:""}; 
 
}
