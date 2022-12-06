import { Component, OnInit } from '@angular/core';
import { Beer } from '../model/beer';
import { HttpService } from '../service/http.service';
import { MatDialog } from '@angular/material/dialog';
import { BeerProductComponent } from '../beer-product/beer-product.component';

export interface DialogData {
  data: Beer;
}

@Component({
  selector: 'app-beer-factory',
  templateUrl: './beer-factory.component.html',
  styleUrls: ['./beer-factory.component.scss'],
})
export class BeerFactoryComponent implements OnInit {
  beers: Beer[] = [];
  simpleDialog: any;
  search = '';
  constructor(private httpService: HttpService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.httpService.getData().subscribe((res) => {
      this.beers = res;
      console.log(res);
    });
  }

  openDialog(product: Beer) {
    console.log(product);
    this.simpleDialog = this.dialog.open(BeerProductComponent, {
      width: '100%',
      height: '100%',
      data: product,
    });
  }
}
