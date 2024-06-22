import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  myTopnav:any=''
  myFunction(event:any){
    event.preventDefault()
   
    let x= document.getElementById("myTopnav");
    if( x && x.className =="header-right"){
      x.className += " responsive";
    }else {
      if (x){
        x.className = "header-right";
      }
       
    }
  }
  showNav(event:any){
    event.preventDefault()
    document.getElementById('nav_link')?.style.display='block'

  }

}
