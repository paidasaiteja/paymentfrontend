// import { Component, OnInit } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';
// import { NoopAnimationPlayer } from "@angular/animations";
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoopAnimationPlayer } from "@angular/animations";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  f:NgForm
  s: string
  data:string
  constructor(public dialog: MatDialogRef<ModelComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.s=data.s;
    this.f=data.f;
   }

  ngOnInit(): void {
  }

  closemodal()
  {
    this.dialog.close()
    this.f.reset()
  }
}