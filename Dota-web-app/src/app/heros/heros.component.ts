import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendServiceService } from '../MyService/backend-service.service';
import {TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
})
export class HerosComponent implements OnInit {
  HeroesData: any;
  Dlang: any = 'english';
  serachValue = '';
  altImg = '../../assets/Images/assignmentImg.png';
  img = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png`;
  constructor(
    private backendService: BackendServiceService,
    private router: Router,
   
  ) {
    
  }

  ngOnInit(): void {
    // this.getData1(this.Dlang);
    this.getData(this.Dlang);
  }

  getData(lang: string) {
    this.Dlang = "english";
    console.log(lang);
    this.backendService.getData(this.Dlang).subscribe((data: any) => {
      // console.log(JSON.parse(data).result.data.heroes);
      this.HeroesData = JSON.parse(data).result.data.heroes;
      // console.log(this.HeroesData);
    });
  }
  ImgSrc(name: string) {
    let newName = '';
    newName = name.replace('-', '');
    newName = newName.replace(' ','_');

    return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${newName}.png`;
  }
  GoTODetails(id: number) {
    this.router.navigate([`heroDetails/${id}/${this.Dlang}`]);
  }
  callSerach() {
    console.log(this.serachValue, this.HeroesData[0].name_loc);
  }
}
