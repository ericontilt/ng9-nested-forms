import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './pages/profile/profile.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {BasicInfoComponent} from './components/basic-info/basic-info.component';
import {AddressComponent} from './components/address/address.component';

const dataFormRoutes: Routes = [
  {path: '', component: ProfileComponent}
];

@NgModule({
  declarations: [
    ProfileComponent,
    BasicInfoComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(dataFormRoutes)
  ]
})
export class ProfileModule {
}
