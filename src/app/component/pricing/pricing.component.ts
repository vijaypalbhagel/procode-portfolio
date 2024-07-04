import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  title = 'Bytes';
  activeTab:string = 'Education'
    onTabClick(tab:any){
      this.activeTab = tab; 
    }
}
