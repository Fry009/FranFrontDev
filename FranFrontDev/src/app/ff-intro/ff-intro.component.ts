import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ff-intro',
  templateUrl: './ff-intro.component.html',
  styleUrls: ['./ff-intro.component.css']
})
export class FfIntroComponent implements OnInit {

  imgUrl = '../assets/img/introImg.png';

  constructor() { }

  ngOnInit(): void {
  }

  goToContact(): void {

  }

}
