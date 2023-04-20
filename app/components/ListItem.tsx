import React from 'react';
interface ListItem {
  id: number;
  title: string;
  deskripsi: string;
}
interface Props {
  list: ListItem[];
}
const List: React.FC<Props> = ({ list }) => {
  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {list.map((item) => (
        <div
          key={item.id}
          className='bg-white rounded-lg overflow-hidden shadow-md'
        >
          <div className='px-4 py-2 bg-gray-100 font-medium text-lg'>
            {item.title}
          </div>
          <div className='px-4 py-2'>{item.deskripsi}</div>
        </div>
      ))}
    </div>
  );
};
export default List;
