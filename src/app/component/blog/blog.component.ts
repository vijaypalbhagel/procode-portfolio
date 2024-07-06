import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  modelDate: any= ''
  modalImage: any=''
  addProduct(){
    
  }
  openModal(num: any){
    if(num ==1){
      this.modelDate='06/07/2024'
      this.modalImage = "../../../assets/blog-01.webp"
    }else if(num ==2){
      this.modelDate='08/08/2024'
      this.modalImage = "../../../assets/blog-02.webp"
    }else if(num ==3){
      this.modelDate='20/05/2023'
      this.modalImage = "../../../assets/blog-03.webp"
    }
  }
}
