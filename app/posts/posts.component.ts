import {Component, OnInit} from '@angular/core';

import {PostService} from './post.service';
import {SpinnerComponent} from'../shared/spinner.component';

@Component({
    template: `
        <h2>Posts<h2>        
        <div class="col-md-6 col-sm-6">
          <spinner [visible]="postsLoading"></spinner>
            <ul class="list-group">
                <li *ngFor="let p of posts"
                    class="list-group-item">
                    {{ p.title }}
                </li>
            </ul>
        </div>
    `,
    providers:[PostService],
    directives:[SpinnerComponent]
})

export class PostsComponent implements OnInit{
    postsLoading = true;
    posts:any;

    constructor(private _postService:PostService){        
    }

    ngOnInit(){
        this._postService.getPosts()
            .subscribe(x => {
                this.posts = x;
                this.postsLoading = false;});
    };
}