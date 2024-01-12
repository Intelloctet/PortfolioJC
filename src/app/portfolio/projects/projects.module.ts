import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslateModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
