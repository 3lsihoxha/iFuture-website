import { Component, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {

  
  constructor(private viewportScroller: ViewportScroller) {}

  
  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  
  
}
