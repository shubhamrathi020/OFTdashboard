import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import * as $ from 'jquery';

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() || 0;
    $('nav').toggleClass('scrolled',scroll>30);
    $('img.logo').toggleClass('OTFlogoSmall',scroll>30);
    $('img.logo').toggleClass('OTFlogoLarge',scroll<=30);
  })
})