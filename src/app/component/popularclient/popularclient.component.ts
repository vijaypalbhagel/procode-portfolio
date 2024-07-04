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
  showall=false;
  designsvalue=false;
  lastvalue:any='false';
  script(){
    
  }
 
  all(){
this.showall=true;
  }
  Design(){
this.designsvalue=true;
  }
  word(){

  }
  react(){

  }
  last(){
this.lastvalue=true;
  }
}
