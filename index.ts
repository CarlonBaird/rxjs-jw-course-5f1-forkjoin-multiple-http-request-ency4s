import { ajax } from 'rxjs/ajax';

//forkJoin : Used to handle multiple HTTP calls

let URL1: string = 'https://random-data-api.com/api/name/random_name';

let URL2: string = 'https://random-data-api.com/api/nation/random_nation';

let URL3: string = 'https://random-data-api.com/api/food/random_food';

const randomName$ = ajax(URL1);
const randomNation$ = ajax(URL2);
const randomFood$ = ajax(URL3);

randomName$.subscribe((ajaxResponse) => console.log(ajaxResponse));
randomNation$.subscribe((ajaxResponse) => console.log(ajaxResponse));
randomFood$.subscribe((ajaxResponse) => console.log(ajaxResponse));
