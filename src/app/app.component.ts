import { Component, OnInit, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'ifuture';

 constructor(private viewportScroller: ViewportScroller, private router: Router, private elementRef: ElementRef) {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      const checkbox = this.elementRef.nativeElement.querySelector('#active');
      if (checkbox.checked) {
        checkbox.checked = false;
      }
    }
  });
 }

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

 
  
}



