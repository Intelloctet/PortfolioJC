import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent {
  currentLang = this.translate.defaultLang;
  faLanguage = faLanguage;
  data: any;
  menu_list: any;
  constructor(
    private translate: TranslateService,
  ) {
  }

  changeLang() {
    this.translate.defaultLang = this.translate.defaultLang == 'en' ? 'fr' : 'en';
    this.translate.use(this.translate.defaultLang)
    this.currentLang = this.translate.defaultLang;
  }
}
