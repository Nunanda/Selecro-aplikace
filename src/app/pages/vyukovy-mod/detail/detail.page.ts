import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { VyukaService } from 'src/app/services';
import { Postup, Vyrobek } from 'src/app/types';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})

export class DetailPage implements OnInit {
  @ViewChild('swiper') swiper: SwiperComponent;
  config: SwiperOptions = {
    loop: true
  };

  vyrobek: Vyrobek;
  kroky: Array<Postup>;

  constructor(private vyukaService: VyukaService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
    const nazev: string = this.activatedRoute.snapshot.paramMap.get('nazevVyrobku');
    this.vyrobek = this.vyukaService.getVyrobekByName(nazev);
    this.kroky = this.vyrobek.kroky;
  }

  ngOnInit() {
  }

  getEmbedVideo(embed: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${embed}?showinfo=0&loop=1&modestbranding=1`);
  }

  goToNextSlide() {
    this.swiper.swiperRef.slideNext();
  }

  goToPreviousSlide() {
    this.swiper.swiperRef.slidePrev();
  }
}