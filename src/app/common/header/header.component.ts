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
  
  showNav(event:any){
    event.preventDefault()
   
    const navLink = document.getElementById('nav_link');
    if(navLink){
      navLink.classList.toggle('show');

    }

  }
  showSidebar(){
    const navLink = document.getElementById('nav_link');
    if(navLink){

      navLink.classList.remove('show');
    }
  }

}
