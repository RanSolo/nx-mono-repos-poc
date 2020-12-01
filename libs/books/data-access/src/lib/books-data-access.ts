import { IBook } from '@neighborly/shared-models';
import fetch from 'node-fetch';

const url = "http://localhost:3333/api/books"

export function getBooks(): Promise<IBook[]> {
  return fetch(url, { mode: 'cors' })
    .then((res: { json: () => void; }) => {
      return res.json()
    })
    .catch((e: any) => console.log('response blocked by browser', e));
}

//export function getBook(_id: any): Promise<IBook> {
//  return fetch(url, { mode: 'cors' })
//    .then((res: { json: () => void; }) => {
//      return res.json()
//    })
//    .catch((e: any) => console.log('response blocked by browser', e));
//}
