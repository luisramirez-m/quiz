import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QzButtonComponent } from './components/button/button.component';

const components = [QzButtonComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components],
})
export class SharedModule {}
