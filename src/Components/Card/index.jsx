import { useContext } from 'react';
import { AppContext } from '../../Context';

import { PlusIcon } from '@heroicons/react/24/outline';

const Card = ({ data }) => {
  const { title, price, images, category } = data;
  const context = useContext(AppContext);

  const showProduct = () => {
    context.openProductDetail();
    context.setProductToShow(data);
  };

  return (
    <div
      className='bg-white cursor-pointer w-56 h-auto rounded-lg p-4 shadow-xl hover:shadow-2xl transition duration-500 ease-in-out'
      onClick={showProduct}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/70 rounded-lg text-black text-xs font-medium m-2 px-3 py-0.5'>
          {category.name}
        </span>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={images[0] ? images[0] : ''}
          alt={title}
        />
        <div
          onClick={() => context.setCount(context.count + 1)}
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 shadow-lg '
        >
          <PlusIcon className='h-4 w-4 text-gray-900' />
        </div>
      </figure>
      <p className='flex justify-between items-center text-ellipsis'>
        <span className='text-sm font-light'>{title}</span>
        <span className='text-base font-medium'>${price}</span>
      </p>
    </div>
  );
};

export default Card;
