import { NgModule } from '@angular/core';

// PrimeNg 13.4.1
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    SidebarModule
  ],
})
export class PrimengModule { }
