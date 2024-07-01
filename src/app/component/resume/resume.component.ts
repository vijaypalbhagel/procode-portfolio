import { Component , OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
title = 'Bytes';
activeTab:string = 'Education'
  onTabClick(tab:any){
    this.activeTab = tab; 
  }
  
}
