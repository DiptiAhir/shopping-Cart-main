import React from 'react';
import { FcDeleteDatabase } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-toastify';

export const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error('ITEM Removed');
  };

  return (
    <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-gray-300 py-4 px-4">
      {/* Image Section */}
      <div className="flex-shrink-0 w-24 h-24">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Product Info Section */}
      <div className="flex-1 ml-4">
        <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {item.description}
        </p>
        <p className="text-green-600 font-semibold mt-2">${item.price}</p>
      </div>

      {/* Remove Button Section */}
      <div
        className="flex items-center justify-center cursor-pointer text-red-600 hover:text-red-800"
        onClick={removeFromCart}
      >
        <FcDeleteDatabase size={24} />
      </div>
    </div>
  );
};
