import { forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';

//forkJoin : Used to handle multiple HTTP calls

let URL1: string = 'https://random-data-api.com/api/name/random_name';

let URL2: string = 'https://random-data-api.com/api/nation/random_nation';

let URL3: string = 'https://random-data-api.com/api/food/random_food';

const randomName$ = ajax(URL1);
const randomNation$ = ajax(URL2);
const randomFood$ = ajax(URL3);

// randomName$.subscribe((ajaxResponse: any) =>
//   console.log(ajaxResponse.response.first_name)
// );
// randomNation$.subscribe((ajaxResponse) =>
//   console.log(ajaxResponse.response.capital)
// );
// randomFood$.subscribe((ajaxResponse) =>
//   console.log(ajaxResponse.response.dish)
// );

//forkJoin waits for all the subscriptions to complete and then emit the values provided by each of the input observables
forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
  //using destructuring [nameAjax, nationAjax, foodAjax]
  ([nameAjax, nationAjax, foodAjax]) =>
    console.log(
      `${nameAjax.response.first_name} is from ${nationAjax.response.capital} and likes to eat ${foodAjax.response.dish}`
    )
);
