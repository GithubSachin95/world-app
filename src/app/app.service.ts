import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';      
@Injectable()
export class AppService {
  private commonURL = "https://restcountries.eu/rest/v2/";
  constructor(public http: HttpClient) {

  }

  public getCountriesByRegion = (region: any) => {
    return this.http.get(this.commonURL + "region/" + region)
      .map(response => response);
  }

  public getAllCountries() {
    return this.http.get(this.commonURL + "all")
      .map(response => response);
  }
  public getCountriesByCurrency(code: any) {
    return this.http.get(this.commonURL + "currency/" + code)
      .map(response => response);
  }

  public getCountry(name: any) {
    return this.http.get(this.commonURL + "name/"+ name +"?fullText=true")
      .map(response => response);
  }
  public getCountriesByLanguage(name:any){
    return this.http.get(this.commonURL +"lang/" + name)
    .map(response=>response);
  }
}