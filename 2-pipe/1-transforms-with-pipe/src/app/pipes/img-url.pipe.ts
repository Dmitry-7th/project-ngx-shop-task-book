import {Pipe, PipeTransform} from '@angular/core';
import {IProductImage} from '../../../../../shared/mocks/2-pipes/product';

@Pipe({
  name: 'imgUrl',
})
// @ts-ignore
export class ImgUrlPipe implements PipeTransform {
 // public ci: any;

  public transform(images: IProductImage[] | undefined): string {

    const [cr] = images;

    return cr.url;

  }
}
