import { Component, OnInit } from '@angular/core';
import { AppService } from '.././app.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  public regions: any[] = [{
    name: "Africa",
    description: "Africa is the world's second largest and second most-populous continent."
  },
  {
    name: "Americas",
    description: "The Americas (also collectively called America) comprise the totality of the continents of North and South America. "
  }, {
    name: "Asia",
    description: "Asia is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres."
  }, {
    name: "Europe",
    description: "Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere."
  }, {
    name: "Oceania",
    description: "Oceania is a geographic region comprising Melanesia, Micronesia, Polynesia and Australasia."
  }]

  constructor(private service: AppService) { }

  ngOnInit() {


  }


}



