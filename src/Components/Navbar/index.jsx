import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBagIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

import { AppContext } from '../../Context';

export const Navbar = () => {
  const context = useContext(AppContext);
  const activeStyle = 'text-sky-500 underline underline-offset-4';
  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-base bg-slate-100'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>Shopi</NavLink>
        </li>
        <li>
          <NavLink to='/' className={({ isActive }) => (isActive ? activeStyle : undefined)}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-gray-500'>
          <div className='flex gap-1 justify-center items-center'>
            <EnvelopeIcon className='h-6 w-6' />
            <p>jodeperezlo@platzi.com</p>
          </div>
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li>
          <div className='relative'>
            <ShoppingBagIcon className='h-6 w-6' />{' '}
            <span
              className={`absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-medium leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-500/80 rounded-full ${
                context.count === 0 ? 'hidden' : ''
              }`}
            >
              {context.count}
            </span>
          </div>
        </li>
      </ul>
    </nav>
  );
};
