import {Input, Pipe, PipeTransform} from '@angular/core';
import {IProductImage} from '../../../../../shared/mocks/2-pipes/product';

@Pipe({
  name: 'imgUrl',
})
// @ts-ignore
export class ImgUrlPipe implements PipeTransform {
@Input() product: any;
  public transform(images: IProductImage[] | undefined): string {
    if (!Array.isArray(this.product?.images)) {
      console.log( '!)');
      return '';
    }else{
      return this.product.images[0];
     // const [cr] = images;
     // return cr.url;
    }

  }
}
