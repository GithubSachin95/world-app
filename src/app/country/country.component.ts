import { Component, OnInit } from '@angular/core';
import { AppService } from '.././app.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  public country;
  public countryData;
  busy: Subscription;

  constructor(private service: AppService, public ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.country = this.ActivatedRoute.snapshot.paramMap.get('name');
    this.getCountry(this.country);
  }
  getCountry(country: any) {
    this.busy = this.service.getCountry(country).subscribe(
      data => {
        this.countryData = data;

      },
      error => {
        console.log("Error occured")
      }

    )
  }
}