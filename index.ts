import { ajax } from 'rxjs/ajax';

//forkJoin : Used to handle multiple HTTP calls

let URL1: string = 'https://random-data-api.com/api/name/random_name';

let URL2: string = 'https://random-data-api.com/api/nation/random_nation';

const randomName$ = ajax(URL1);
