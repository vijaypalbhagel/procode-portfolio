import { Component } from '@angular/core';
// import { Swiper, SwiperModule } from 'swiper/types';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
@Injectable()

export class ClientsComponent {
  
  

slideIndex = 1;
slides = [
  {image: "../../../assets/final-home--1st.png", caption: 'RAINBOW-THEMES', content: 'Nevine Acotanza', name: 'Chief Operating Officer' ,img: "../../../assets/quote.png",app:'Android App Development',upwork:'via Upwork - Mar 4, 2015 - Aug 30,2021', para:' Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris . '},
  {image: "../../../assets/final-home--2nd.png", caption: 'RAINBOW-THEMES', content: 'Nevine Acotanza', name: 'Chief Operating Officer' ,img: "../../../assets/quote.png" ,app:'Android App Development',upwork:'via Upwork - Mar 5, 2015 - Aug 30,2021', para:' Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris . '},
  {image: "../../../assets/final-home--3rd.png", caption: 'RAINBOW-THEMES', content: 'Nevine Acotanza', name: 'Chief Operating Officer' ,img: "../../../assets/quote.png",app:'Android App Development',upwork:'via Upwork - Mar 6, 2015 - Aug 30,2021', para:' Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris . '}
];

constructor() { }

ngOnInit(): void {
  this.showSlides(this.slideIndex);
}

plusSlides(n: number): void {
  this.showSlides(this.slideIndex += n);
}

currentSlide(n: number): void {
  this.showSlides(this.slideIndex = n);
}

showSlides(n: number): void {
  if (n > this.slides.length) { this.slideIndex = 1 }
  if (n < 1) { this.slideIndex = this.slides.length }
}
}