import { Component, OnInit } from '@angular/core';
import { Renderer2, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  showLoader: boolean = true;

  constructor(private renderer: Renderer2, private router: Router, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.closeLoader();
    }, 2000);

    this.viewportScroller.scrollToPosition([0, 0]);

  }

  closeLoader() {
    this.showLoader = false;
    this.router.navigate(['/calendar']);
  }

  ngAfterViewInit() {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    this.renderer.appendChild(document.body, script);
  }
  
  

}
