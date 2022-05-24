import { NgModule } from '@angular/core';

// PrimeNg 13.4.1
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  exports: [
    ButtonModule,
    SidebarModule
  ],
})
export class PrimengModule { }
