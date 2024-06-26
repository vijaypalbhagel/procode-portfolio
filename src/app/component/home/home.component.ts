import { Component, Inject, OnDestroy,PLATFORM_ID  } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
 
})
export class HomeComponent implements OnDestroy  {
  bannerTxt: any='Developer'
  private intervalId: any;
  className:any='typing-animation'

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngOnDestroy(): void {
    this.clearInterval();
  }





  

  

   startInterval(): void {
    this.intervalId = setInterval(() => {
     console.log('timer start')
     this.bannerTxt= this.bannerTxt=='Developer'?'Professional Coder':'Developer'
     if(this.bannerTxt =='Developer'){
      this.className='typing-animation'
     }else{
      this.className=''
       this.className='typing-animation2'
     }
    }, 3000); 
  }

   clearInterval(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

 



















  ngOnInit(): void {
 
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById('start')?.click()
    }
    console.log('ngOnInit called');
   
  }


 

  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy called');
  // }
 
}