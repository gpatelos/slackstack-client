import { Component, OnInit } from '@angular/core';
import { Stackpost } from '../model/stackpost';
import { StackpostService } from '../service/stackpost.service';

@Component({
  selector: 'app-stackpost',
  templateUrl: './stackpost.component.html',
  styleUrls: ['./stackpost.component.css']
})
export class StackpostComponent implements OnInit {

  stackposts: Stackpost[];

  selectedStackpost: Stackpost;
  //  = {
  //   id:1,
  //   title: "this is a stackpost, yo",
  //   comment: '';
  // } ;

  constructor(private _stackpostService: StackpostService) { }

  ngOnInit() {
    this.getStackposts();
  }

  onSelect(post :Stackpost): void {
    this.selectedStackpost = post;
  }

  getStackposts(): void {
    this._stackpostService.getStackposts()
    .subscribe(stackposts=> this.stackposts = stackposts);
  }

  lookup(questionId: number): void {
    if (!questionId) { return; }
    this._stackpostService.getStackPostById(questionId)
    .subscribe(stackpost => {
      this.stackposts.push(stackpost);
    });
  }
  keywordLookup(keyword: string): void {
    if (!keyword) { return; }
    this._stackpostService.getStackPostByInTitle(keyword)
    .subscribe(stackpost => {
      this.stackposts.push(stackpost);
    });
  }
  delete(index: number): void {

    this._stackpostService.deleteStackpost(index).subscribe();
    this._stackpostService.getStackposts()
      .subscribe(stackposts=> this.stackposts = stackposts);
  }


}
