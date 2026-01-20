import { Component, OnInit } from '@angular/core';
import { DesignSection } from '../models/design';
import { DesignSectionComponent } from "../design-section/design-section.component";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [DesignSectionComponent, CommonModule],
  templateUrl: './design.component.html',
  styleUrl: './design.component.scss'
})
export class DesignComponent implements OnInit{

  designs?: DesignSection;

  private designsMap: Record<string, DesignSection> = {
    web: {
      title: 'Web Design',
      subtitle: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
      items: [
        {
          image: 'assets/images/web-design/image-express.jpg',
          title: 'Express',
          description: 'A multi-carrier shipping website for ecommerce businesses'
        },
        {
          image: 'assets/images/web-design/image-transfer.jpg',
          title: 'Transfer',
          description: 'Site for low-cost money transfers and sending money within seconds'
        },
        {
          image: 'assets/images/web-design/image-photon.jpg',
          title: 'Photon',
          description: 'A state-of-the-art music player with high-resolution audio and DSP effects'
        },
        {
          image: 'assets/images/web-design/image-builder.jpg',
          title: 'Builder',
          description: 'Connects users with local contractors based on their location'
        },
        {
          image: 'assets/images/web-design/image-blogr.jpg',
          title: 'Blogr',
          description: 'Blogr is a platform for creating an online blog or publication'
        },
        {
          image: 'assets/images/web-design/image-camp.jpg',
          title: 'Camp',
          description: 'Get expert training in coding, data, design, and digital marketing'
        },
      ]
    },
    app: {
      title: 'App Design',
      subtitle: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
      items: [
        {
          image: 'assets/images/app-design/image-airfilter.jpg',
          title: 'Airfilter',
          description: 'Solving the problem of poor indoor air quality by filtering the air',
        },
        {
          image: 'assets/images/app-design/image-eyecam.jpg',
          title: 'Eyecam',
          description: 'Product that lets you edit your favorite photos and videos at any time',
        },
        {
          image: 'assets/images/app-design/image-faceit.jpg',
          title: 'Faceit',
          description: 'Get to meet your favorite internet superstar with the faceit app',
        },
        {
          image: 'assets/images/app-design/image-todo.jpg',
          title: 'Todo',
          description: 'A todo app that features cloud sync with light and dark mode',
        },
        {
          image: 'assets/images/app-design/image-loopstudios.jpg',
          title: 'Loopstudios',
          description: 'A VR experience app made for Loopstudios',
        },
      ]
    },
    graphic: {
      title: 'Graphic Design',
      subtitle: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
      items: [
        {
          image: 'assets/images/graphic-design/image-change.jpg',
          title: 'Tim Brown',
          description: 'A book cover designed for Tim Brown’s new release, ‘Change’'
        },
        {
          image: 'assets/images/graphic-design/image-boxed-water.jpg',
          title: 'Boxed water',
          description: 'A simple packaging concept made for Boxed Water'
        },
        {
          image: 'assets/images/graphic-design/image-science.jpg',
          title: 'Science!',
          description: 'A poster made in collaboration with the Federal Art Project'
        }
      ]
    }
  };

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const type = params.get('type');

      if(type && this.designsMap[type]) {
        this.designs = this.designsMap[type];
      } else {
        this.designs = undefined;
      }
    });
  }
}
