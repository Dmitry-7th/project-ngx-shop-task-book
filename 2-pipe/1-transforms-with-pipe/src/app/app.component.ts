import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct, oneProduct$} from '../../../../shared/mocks/2-pipes/product';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements  OnInit, OnDestroy{
  public title = '2. Pipes';
  //public product: IProduct = oneProduct;
  public product!: IProduct;
  public subscr: Subscription[] = [];

  public ngOnInit(): void {
    const sub1 =  oneProduct$.subscribe((p) => {
        this.product = p;
      });
    this.subscr.push(sub1);

  }
  public ngOnDestroy(): void{
    this.subscr.forEach(s => s.unsubscribe());
  }


}

