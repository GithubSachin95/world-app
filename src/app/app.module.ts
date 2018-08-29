//module imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgBusyModule } from 'ng-busy';
//component imports
import { AppComponent } from './app.component';
import { RegionsComponent } from './regions/regions.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { CurrencyComponent } from './currency/currency.component';
import { LanguageComponent } from './language/language.component';
import { AppService } from './app.service';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [BrowserModule,BrowserAnimationsModule,NgBusyModule, FormsModule, HttpClientModule, RouterModule.forRoot(
    [{ path: 'regions', component: RegionsComponent },
    { path: 'countries', component: CountriesComponent },
    { path: 'countries/:region', component: CountriesComponent },
    { path: 'currencies/:code', component: CurrencyComponent },
    { path: 'country/:name', component: CountryComponent },
    { path : 'about' , component : AboutComponent},
    { path :'language/:code' , component : LanguageComponent},
    { path: '', component: RegionsComponent },
    { path: '**', component: RegionsComponent, pathMatch: 'full' },
    { path: '***', component: RegionsComponent }])],
  declarations: [AppComponent, RegionsComponent, CountriesComponent, CountryComponent, CurrencyComponent, LanguageComponent, AboutComponent],
  bootstrap: [AppComponent],
  providers: [AppService]
})
export class AppModule { }
