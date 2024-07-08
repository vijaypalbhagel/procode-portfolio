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
  modalheading:any=''
  modalparagraph:any=''
  addProduct(){
    
  }
  openModal(num: any){
    if(num ==1){
      this.modelDate='06/07/2024'
      this.modalImage = "../../../assets/blog-01.webp"
      this.modalheading ='T-shirt design is the part of design'
      this.modalparagraph = 'Nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.'
    }else if(num ==2){
      this.modelDate='08/08/2024'
      this.modalImage = "../../../assets/blog-02.webp"
      this.modalheading = 'Nobis eleifend option conguenes.'
      this.modalparagraph = ' Mauris tempor, orci id pellentesque convallis, massa mi congue eros, sed posuere massa nunc quis dui. Integer ornare varius mi, in vehicula orci scelerisque sed. Fusce a massa nisi. Curabitur sit amet suscipit nisl. Sed eget nisl laoreet, suscipit enim nec, viverra eros. Nunc imperdiet risus leo, in rutrum erat dignissim id.'
    }else if(num ==3){
      this.modelDate='20/05/2023'
      this.modalImage = "../../../assets/blog-03.webp"
      this.modalheading = 'Mauris tempor, orci id pellentesque.'
      this.modalparagraph = 'Nulla non ligula vel nisi blandit egestas vel eget leo. Praesent fringilla dapibus dignissim. Pellentesque quis quam enim. Vestibulum ultrices, leo id suscipit efficitur, odio lorem rhoncus dolor, a facilisis neque mi ut ex. Quisque tempor urna a nisi pretium, a pretium massa tristique. Nullam in aliquam diam. Maecenas at nibh gravida, ornare eros non, commodo ligula. Sed efficitur sollicitudin auctor. Quisque nec imperdiet purus, in ornare odio. Quisque odio felis, vestibulum et.'
    }
  }
}
