import { Component, OnInit, Input } from '@angular/core';
import { Stackpost } from '../model/stackpost';


@Component({
  selector: 'app-stackpost-detail',
  templateUrl: './stackpost-detail.component.html',
  styleUrls: ['./stackpost-detail.component.css']
})
export class StackpostDetailComponent implements OnInit {

  @Input() stackpost: Stackpost;

  constructor() { }

  ngOnInit() {
  }

}
