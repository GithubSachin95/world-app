import { Component, OnInit } from '@angular/core';
import { AppService } from '.././app.service';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  public countries ;
  public currency ;
  busy: Subscription;
  constructor(private service: AppService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let code = this.activatedRoute.snapshot.paramMap.get('code');
    console.log(code);
    this.getCountriesSameCurrency(code)
  }
  getCountriesSameCurrency(code: any) {
     this.busy = this.service.getCountriesByCurrency(code).subscribe(
      data=>{
        this.countries = data;
        this.currency = this.countries[0]["currencies"][0]["name"];
        
      }
    )

  }
}