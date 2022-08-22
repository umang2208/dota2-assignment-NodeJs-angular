import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendServiceService } from '../MyService/backend-service.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
})
export class HeroDetailsComponent implements OnInit {
  id: any;
  lang: any;
  HeroesDetails: any;
  newName: any;
  constructor(
    private route: ActivatedRoute,
    private backendService: BackendServiceService
  ) {}

  ngOnInit(): void {
    // this.charName = this.HeroesDetails?.name_loc;
    this.id = this.route.snapshot.params['id'];
    this.lang = this.route.snapshot.params['lang'];
    console.log(this.id, this.lang);
    this.backendService
      .getHeroesDetails(this.id, this.lang)
      .subscribe((data: any) => {
        const HeroesData = JSON.parse(data).result.data.heroes;
        console.log(HeroesData[0]);
        this.HeroesDetails = HeroesData[0];
        this.getImage(this.HeroesDetails.name_loc);
      });
  }

  videoUrl: any;
  Image: any;

  getImage(name: string) {
    this.newName = name.toLowerCase();
    // return "../../assets/Images/assignmentImg.png";

    if (name !== null) this.newName = this.newName.replace('-', '');
    this.newName = this.newName.replace(' ', '_');
    this.videoUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${this.newName}.webm`;
    this.Image = `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${this.newName}.png`;
    console.log(this.videoUrl);
  }


  // getVideo(name: string) {
  //   // return "../../assets/Images/assignmentImg.png";
  //   let newName = '';
  //   if (name !== null) newName = name?.replace('-', '');
  //   let value = `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${newName}.webm`;
  //   console.log(value, 'video');
  //   return value;
  // }
}
