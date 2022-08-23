import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  supportLanguage = ['English','Spanish','French'];

  constructor(
    private translateService:TranslateService
  ) { 
    translateService.addLangs(this.supportLanguage);
    translateService.setDefaultLang('English');
    const browserLnag = translateService.getBrowserLang() || " ";
    translateService.use(browserLnag);
  }


  ngOnInit(): void {
  }
  SelectLang(event:Event){
   const lang = (event.target as HTMLSelectElement).value;
    console.log( lang);
    this.translateService.use(lang);
    // this.translateService.use((/event.target as HTMLInputElement).value);
  }
}
