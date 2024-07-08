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
 


  scriptall(event:any,num:any){
    console.log(num)
    event.preventDefault();
 if(num==1){
  this.popularimg = '../../../assets/client1.png'
  this.popularimg = '../../../assets/client2.png'
  this.popularimg ='../../../assets/client3 (1).png'
 }
 else if(num==2){
  this.popularimg = '../../../assets/client3.png'
 }
 else if(num==3){
  this.popularimg = '../../../assets/client1.png'
  this.popularimg = '../../../assets/client2.png'
 }
 else if(num==4){
  this.popularimg ='../../../assets/client3 (1).png'
 }
 else if(num==5){
  this.popularimg = '../../../assets/client2.png'
 }else if(num==6){
  this.popularimg = '../../../assets/client1.png'
 }
  }
}
