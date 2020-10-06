import {Pipe, PipeTransform} from '@angular/core';
import {IProductImage} from '../../../../../shared/mocks/2-pipes/product';

@Pipe({
  name: 'imgUrl',
})
// @ts-ignore
export class ImgUrlPipe implements PipeTransform {
 // public ci: any;

  public transform(images: IProductImage[] | undefined): string {
    const list: string[] = ['10', '20', '30'];
    //const [cr1] = list;
    //const [ci] = list;

    // ci.forEach( (value) => {
    //   console.log(value);
    // });
    const [cr] = images;
    // console.log(cr);
    console.log(typeof cr);
    return cr.url;

  }
}
