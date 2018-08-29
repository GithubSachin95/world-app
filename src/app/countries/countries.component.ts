import { Component, OnInit } from '@angular/core';
import { AppService } from '.././app.service';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public countries: any;
  public AllCountries : boolean;
  public region;
  busy: Subscription;
  constructor(private service: AppService, public ActivatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    
    this.region = this.ActivatedRoute.snapshot.paramMap.get('region');
    if (this.region != null) {

      this.getCountriesByRegion(this.region);
      this.AllCountries = false;
    }
    else {
      this.getAllCountries();
      this.AllCountries = true;
    }

  }
  getCountriesByRegion(region: any) {
    this.busy = this.service.getCountriesByRegion(region).subscribe(
      data => {
        this.countries = data;
        
        
      },
      error => {
        console.log("Error occured");
      }
    )
  }
  getAllCountries() {
    this.service.getAllCountries().subscribe(
      data => {
        this.countries = data;
       

      },
      error => {
        console.log("Error Ocurred");
      }
    )
  }

}


