import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-ff-intro',
  templateUrl: './ff-intro.component.html',
  styleUrls: ['./ff-intro.component.css']
})
export class FfIntroComponent implements OnInit {

  imgUrl = '../assets/img/introImg.png';

  constructor() { }

  ngOnInit(): void {
    particlesJS.load('particles-js', '../assets/json/particles.json', null);
  }

  goToContact(): void {

  }

}
