import Image from 'next/image';
import { Inter } from 'next/font/google';
import List from './components/ListItem';

const inter = Inter({ subsets: ['latin'] });

const listData = [
  { id: 1, title: 'Item 1', deskripsi: 'Deskripsi item 1' },
  { id: 2, title: 'Item 2', deskripsi: 'Deskripsi item 2' },
  { id: 3, title: 'Item 3', deskripsi: 'Deskripsi item 3' },
];

export default function Home() {
  return (
    <div>
      <List list={listData} />
    </div>
  );
}
