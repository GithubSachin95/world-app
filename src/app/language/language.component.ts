import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '.././app.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  code: any;
  public countries: any
  busy: Subscription;
  public language: any;
  constructor(public service: AppService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.code = this.activatedRoute.snapshot.paramMap.get('code');
    this.getCountriesSameLanguage(this.code);
    
  }

  getCountriesSameLanguage(code: any) {
    this.busy = this.service.getCountriesByLanguage(code).subscribe(
      data => {
        this.countries = data;
        
        
        
      }
    )
   
  }
  

    }
  
