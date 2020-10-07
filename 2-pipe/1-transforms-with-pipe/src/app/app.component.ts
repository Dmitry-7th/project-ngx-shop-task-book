import {Component, OnInit} from '@angular/core';
import {IProduct, oneProduct, oneProduct$} from '../../../../shared/mocks/2-pipes/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements  OnInit{
  public title = '2. Pipes';
  //public product: IProduct = oneProduct;
  public product!: IProduct;

  public ngOnInit(): void {
    oneProduct$.subscribe((p) => {
        this.product = p;
      });
  }
}

