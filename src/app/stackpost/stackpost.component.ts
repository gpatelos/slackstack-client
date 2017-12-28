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

}
