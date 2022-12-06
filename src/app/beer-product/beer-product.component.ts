import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Beer } from '../model/beer';

@Component({
  selector: 'app-beer-product',
  templateUrl: './beer-product.component.html',
  styleUrls: ['./beer-product.component.scss'],
})
export class BeerProductComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<BeerProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Beer
  ) {}

  ngOnInit(): void {}
  close(): void {
    this.dialogRef.close();
  }
}
