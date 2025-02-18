import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dishes = [
    { name: 'Sakura Sushi', image: '/assets/image/0e3d2401733e61c3dc9da66a609f85f0.jpg', description: 'Sushi hoa anh đào đặc biệt.' },
    { name: 'Galaxy Cake', image: '/assets/image/nha-hang-ca-ro-dong-1725421564512.png', description: 'Bánh ngọt lấp lánh như thiên hà.' },
    { name: 'Dragon Steak', image: '/assets/image/0e3d2401733e61c3dc9da66a609f85f0.jpg', description: 'Bò nướng sốt rồng lửa.' },
    { name: 'Crystal Dumplings', image: '/assets/image/nha-hang-ca-ro-dong-1725421564512.png', description: 'Há cảo trong suốt ánh kim cương.' },
    { name: 'Flaming Ice Cream', image: '/assets/image/0e3d2401733e61c3dc9da66a609f85f0.jpg', description: 'Kem lửa cháy trên băng đá.' },
    { name: 'Neon Cocktail', image: '/assets/image/nha-hang-ca-ro-dong-1725421564512.png', description: 'Cocktail dạ quang độc lạ.' },
    { name: 'Flaming Ice Cream', image: '/assets/image/0e3d2401733e61c3dc9da66a609f85f0.jpg', description: 'Kem lửa cháy trên băng đá.' },
    { name: 'Neon Cocktail', image: '/assets/image/nha-hang-ca-ro-dong-1725421564512.png', description: 'Cocktail dạ quang độc lạ.' }
  ];
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
