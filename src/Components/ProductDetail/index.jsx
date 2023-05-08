import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { AppContext } from '../../Context';

const ProductDetail = () => {
  const context = useContext(AppContext);
  return (
    <aside
      className={`${
        !context.isProductDetailOpened ? `hidden` : `flex`
      } flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] bottom-2`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <XMarkIcon
          className='h-6 w-6 text-black-500 cursor-pointer'
          onClick={() => context.closeProductDetail()}
        />
      </div>
      <div className='flex flex-col gap-4 p-6'>
        <figure className='w-full h-4/5'>
          <img
            className='w-full h-full object-cover rounded-lg'
            src={context.productToShow?.images[0] ? context.productToShow.images[0] : ''}
            alt={context.productToShow?.title}
          />
        </figure>
        <div className='flex flex-col gap-4'>
          <h2 className='font-medium text-xl'>{context.productToShow?.title}</h2>
          <p className='text-sm font-light'>{context.productToShow?.description}</p>
          <p className='text-lg font-medium'>$ {context.productToShow?.price}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-sm font-medium'>Quantity</label>
          <input
            className='border border-black rounded-lg p-2 font-bold text-center'
            type='number'
            min='1'
            defaultValue='1'
          />
          <button class='bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-ou'>
            Add to cart
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ProductDetail;
