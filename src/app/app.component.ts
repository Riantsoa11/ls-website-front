import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from "src/app/services/language/language.service"
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Li\'s Sandwich et Salade';
  
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService
    ){
    }
  ngOnInit(): void{
    
    this.languageService.initLanguage()


    this.titleService.setTitle( "Li\'s Sandwich | Li\'s Salade" );

    this.metaService.addTags([
      {name: 'keywords', content: 'Sandwicherie et Saladerie'},
      {name: 'description', content: 'Li\'s Sandwich et Salade est une sandwicherie et saladerie située à Limoges. Nous proposons des sandwichs, des salades, des pinsas; des dessert et des boissons.'},
    ]);
    
    
    AOS.init(); 

  }
}
