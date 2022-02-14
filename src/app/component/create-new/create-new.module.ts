import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewComponent } from './create-new.component';
import { RouterModule, Routes } from '@angular/router';
import { CarrotruleMaterialModule } from 'src/app/shared/carrotrule-material/carrotrule-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatasourceComponent } from './datasource/datasource.component';

const create_route : Routes =[
  {
    path:'',
    component: CreateNewComponent
  }
];

@NgModule({
  declarations: [CreateNewComponent, DatasourceComponent],
  imports: [
    CommonModule,
    CarrotruleMaterialModule,
    RouterModule.forChild(create_route),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class CreateNewModule { }
