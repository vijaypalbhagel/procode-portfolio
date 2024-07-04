import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { ResumeComponent } from './component/resume/resume.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { FeaturesComponent } from './component/features/features.component';
import { ContactComponent } from './component/contact/contact.component';
import { ClientsComponent } from './component/clients/clients.component';
import { PopularclientComponent } from './component/popularclient/popularclient.component';
import { BlogComponent } from './component/blog/blog.component';
// import { Swiper, SwiperModule } from 'swiper/types';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FooterComponent,
    HeaderComponent,

  HomeComponent,
  ResumeComponent,
  PricingComponent,
  PortfolioComponent,
  FeaturesComponent,
  ContactComponent,
  ClientsComponent,
  PopularclientComponent,
  BlogComponent,
  
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'procode-portfolio';
}
