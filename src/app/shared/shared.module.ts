import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';

const exportModule = [ SidebarComponent, NavbarComponent,  SpinnerComponent ]

@NgModule({
  declarations: [
    exportModule
  ],
  imports: [
    CommonModule
  ],
  exports: [
    exportModule
  ]
})
export class SharedModule { }
