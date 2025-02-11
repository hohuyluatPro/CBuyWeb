import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [
    '/assets/image/0e3d2401733e61c3dc9da66a609f85f0.jpg',
    '/assets/image/nha-hang-ca-ro-dong-1725421564512.png',
    '/assets/image/12270f80d3f516857d009eb21dfdc5d9.jpg',
    '/assets/image/images.jpg'
  ];
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
