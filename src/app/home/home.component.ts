import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from "../about/about.component";
import { PageCityComponent } from "../page-city/page-city.component";
import { LandComponent } from '../land/land.component';
import { VideoSectionComponent } from "../video-section/video-section.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, PageCityComponent, LandComponent, VideoSectionComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
