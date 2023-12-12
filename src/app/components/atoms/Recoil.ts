// RecoilAtoms.ts
import { atom } from 'recoil';
import { Book } from '@/app/types/Book';

export const booksState = atom<Book[]>({
  key: 'booksState',
  default: [],
});
