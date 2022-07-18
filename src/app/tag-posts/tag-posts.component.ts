import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TagPostsService } from '../tag-posts.service';
import { ActivatedRoute } from '@angular/router';   
@Component({
  selector: 'app-tag-posts',
  templateUrl: './tag-posts.component.html',
  styleUrls: ['./tag-posts.component.css']
})

export class TagPostsComponent implements OnInit {
  posts:any;
  parms:any;
  constructor(private tagpostService: TagPostsService) { }

  ngOnInit(): void {

    this.tagpostService.getTagPosts("tech,politics","id","asc").subscribe((res:any)=>{
      if(res){
        console.log(res);
        if(res.code===200){
         this.posts=res.data;
        }
        else{
          
        }
      }
    });
  }
 
}
