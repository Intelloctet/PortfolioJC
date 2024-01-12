import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslateModule
  ],
  exports: [
    SkillsComponent
  ]
})
export class SkillsModule { }
