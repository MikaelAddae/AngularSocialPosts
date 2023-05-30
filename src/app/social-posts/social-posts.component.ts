import { Component, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {
submitPost($event: Post) {
throw new Error('Method not implemented.');
}
  posts:Post [] = [
    {title: "Is your Media social enough?!?", thought: "In this article we do a deep dive into what it means to socialize with your media. Featuring thoughts from people who have them."},
    {title: "15 BeSt WaYs To ReAd SoCiAl MeDiA PoStS", thought: "If you think you're doing it right, you are definitly wrong."},
    {title: "Florida Man mistakenly marries alligator", thought: "But then falls in love. Join us as we dive into this only in Florida adventure"}
  ];

  p1:Post={title:"", thought:""}
  showSingle(index:number): void
  {
    this.posts[index] = this.p1; 
  }

}
