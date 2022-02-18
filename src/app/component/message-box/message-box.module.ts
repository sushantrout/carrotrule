import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MessageBoxComponent } from './message-box.component';
import { CarrotruleMaterialModule } from 'src/app/shared/carrotrule-material/carrotrule-material.module';
import { MessageBoxDialogComponent } from './message-box-dialog/message-box-dialog.component';
import { FormsModule } from '@angular/forms';

const create_route: Routes = [
  {
    path: '',
    component: MessageBoxComponent,
  },
];

@NgModule({
  declarations: [MessageBoxComponent, MessageBoxDialogComponent],
  imports: [CommonModule,
    FormsModule,
    CarrotruleMaterialModule,
    RouterModule.forChild(create_route)],
})
export class MessageBoxModule {}
