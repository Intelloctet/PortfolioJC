import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfilComponent } from './user-profil.component';
import { ImageProfilComponent } from './image-profil/image-profil.component';
import { UserIdentityComponent } from './user-identity/user-identity.component';
import { UserDescriptionComponent } from './user-description/user-description.component';
import { UserContactsComponent } from './user-contacts/user-contacts.component';



@NgModule({
  declarations: [
    UserProfilComponent,
    ImageProfilComponent,
    UserIdentityComponent,
    UserDescriptionComponent,
    UserContactsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserProfilComponent
  ]
})
export class UserProfilModule { }
