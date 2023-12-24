import { Component, HostListener, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { CurrencyFormats, currencyFormatInterface } from './currency.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public CurrencyFormats = CurrencyFormats;
  public validFromCurrencyList: currencyFormatInterface[];
  public validToCurrencyList: currencyFormatInterface[];
  public amount: any;

  public fromSelectedCountry: currencyFormatInterface;
  public toSelectedCountry: currencyFormatInterface;
  public showResultSection: boolean = false;


  constructor(private homeService: HomeService) {

  }

  ngOnInit(): void {
    this.getcurrencyList();
  }

  /**
   * @name getcurrencyList
   * @description make api call and set the supported currency list
   */
  private getcurrencyList() {
    this.homeService.getCurrency().subscribe({
      next: (response: any) => {
        if(response && response.result && response.rates) {
          this.CurrencyFormats.forEach((elm: any) => {
            elm.value = response.rates[elm.code]
          })

          this.validFromCurrencyList = JSON.parse(JSON.stringify(this.CurrencyFormats));
          this.validToCurrencyList = JSON.parse(JSON.stringify(this.CurrencyFormats))
        }
      },
      error: (error) => {
        alert('There was an error in retrieving data from the server');
      }
    })
  }

  /**
   * @name onFromSelect
   * 
   */
  public onFromSelect(currencyDetails: currencyFormatInterface) {
    if(currencyDetails) {
      this.fromSelectedCountry = currencyDetails;
    }
  }

   /**
   * @name onToSelect
   * 
   */
   public onToSelect(currencyDetails: currencyFormatInterface) {
    if(currencyDetails) {
      this.toSelectedCountry = currencyDetails;
    }
  }

  /**
   * @name calculateResult
   * @description calculate result & update UI
   */
  public calculateResult() {
    this.showResultSection = true;
  }

  /**
   * @name calculateCurrency
   * @description calculate currency & update UI
   */
  public calculateCurrency(fromCurrency: any, tocurrency: any, amount: any) {
    return ((tocurrency / fromCurrency) * amount).toFixed(5);
  }



  /**
   * @name calculateDropdownWidth
   * @description calculate dropdown width dynamically
   */
  public calculateDropdownWidth() {
    let dropdownContent: any = document.querySelector('.dropdown-content');
    let dropdown: any = document.querySelector('.dropdown');
    if(dropdownContent && dropdown) {
      dropdownContent.style.width = dropdown.clientWidth + 'px'
    }
  }

}
