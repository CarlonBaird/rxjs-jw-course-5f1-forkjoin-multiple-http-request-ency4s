import { ajax } from 'rxjs/ajax';

let URL1: string = 'https://random-data-api.com/api/name/random_name';

const randomName$ = ajax(URL1);
