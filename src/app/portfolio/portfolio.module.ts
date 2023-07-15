import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { UserProfilModule } from './user-profil/user-profil.module';
import { SkillsModule } from './skills/skills.module';
import { ProjectsModule } from './projects/projects.module';



@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    UserProfilModule,
    SkillsModule,
    ProjectsModule
  ],
  exports: [
    PortfolioComponent
  ]
})
export class PortfolioModule { }
