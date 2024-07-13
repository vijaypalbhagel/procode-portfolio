import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-popularclient',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popularclient.component.html',
  styleUrl: './popularclient.component.css'
})
export class PopularclientComponent {
 popularimg:any=''
 
 populartext:any=''

cards = [
  { img: '../../../assets/client1.png', para:'Marth Smith'},
  { img: '../../../assets/client2.png', para:'Sumith Saha'},
  { img: '../../../assets/client3 (1).png', para:'John Due'},
  { img: '../../../assets/client3.png', para:'Jara Sultana' },
  { img: '../../../assets/client1.png', para:'Sr Director'},
  { img: '../../../assets/client3 (1).png', para:'Janen Jara' },
  { img: '../../../assets/client3.png', para:'marth smith' }
 
];
displayedCards: any[] =this.cards;

showallcards(event:any){
  event.preventDefault();
  this.displayedCards = this.cards;
  this.populartext='marth Smith'
}
showallcards1(event:any) {
  event.preventDefault();
  this.displayedCards = this.cards.slice(0, 3);
  
}

showallcards2(event:any) {
  event.preventDefault();
  this.displayedCards = this.cards.slice(1, 3);
}
showallcards3(event:any){
  event.preventDefault();
  this.displayedCards = this.cards.slice(2,5)
}
showallcards4(event:any){
  event.preventDefault();
  this.displayedCards = this.cards.slice(0,1)
}
showallcards5(event:any){
  event.preventDefault();
  this.displayedCards = this.cards.slice(2,4)
}
showallcards6(event:any){
  event.preventDefault();
  this.displayedCards = this.cards.slice(0,4)
}


}
