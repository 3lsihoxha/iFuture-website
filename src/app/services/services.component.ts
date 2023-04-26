import { Component, OnInit,  } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  //Web & Software development

  web_design_and_development_title = "Web Design & Development"
  web_design_and_development = "We develop websites based on the best methodologies ensuring us to deliver the best quality and results on time with our experience."
  
  web_application_development_title = "Web Application Development"
  web_application_development = "Web app development services help design, build, and evolve web-based software."

  e_commerce_development_title = "E-Commerce Development"
  e_commerce_development = "We offer custom e-commerce development services using the latest technologies and focusing on your business requirements."

  //Design & UX/UI

  uxui_design_title = "UI/UX Design"
  uxui_design = "Our team designs websites and apps that increase conversion, reduce maintenance cost and build a consistent user experience."

  product_design_title = "Product Design"
  product_design = "Take your web & mobile app to the next level with a responsive design and digitally transform your business."

  wireframe_prototyping_title = "Wireframe Prototyping"
  wireframe_prototyping = "We help enterprises navigate any and all facets of the digital landscape, assisting with wire-framing and interactive prototyping."

  //Branding & Marketing

  logo_design_title = "Logo Design"
  logo_design = "Breaking down the entire project into smaller, manageable chunks helps designers approach their tasks with utmost clarity and creativity."

  packaging_design_title = "Packaging Design"
  packaging_design = "Well-designed, meaningful packages attract consumers. After all, packaging is often the consumer’s only tangible, physical interaction with your brand.  "

  seo_title = "SEO"
  seo = "Our websites include full search engine optimization, giving high website rankings in every search engine.  "


  constructor(private viewportScroller: ViewportScroller) {}

  
  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
   
  }
  
}
