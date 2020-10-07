import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'review',
})
// @ts-ignore
export class ReviewPipe implements PipeTransform {
  public transform(countOfReviews: number | undefined): string {
    if(countOfReviews === undefined){
      return 'Нет отзывов';
    }

     let cOfR = String(countOfReviews);

    console.log(cOfR[cOfR.length-1]+'!');



    if ( (cOfR[cOfR.length - 2] === '1' &&  cOfR[cOfR.length - 1] === '1') || (cOfR[cOfR.length - 2] === '1' &&  cOfR[cOfR.length - 1] === '4')  ) {
      return `${countOfReviews} отзывов`;
    }

    if ( (cOfR[cOfR.length - 1] === '5') || (cOfR[cOfR.length - 2] === '1' &&  cOfR[cOfR.length - 1] === '5')  ) {
      return `${countOfReviews} отзывов`;
    }

    if (cOfR[cOfR.length - 1] === '1') {
      return `${countOfReviews} отзыв`;
    }


   // return '';
  }
}
