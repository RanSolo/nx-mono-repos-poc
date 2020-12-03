import { IGenre } from 'libs/models/src/lib/genre/IGenre';
const fetch = require('node-fetch');

const url = "http://localhost:3333/api/books"

export function getGenres(): Promise<IGenre[]> {
  return fetch(url, { mode: 'cors' })
    .then((res: { json: () => void; }) => {
      return res.json()
    })
    .catch((e: any) => console.log('response blocked by browser', e));
}
