import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'src/store';

import { WeekOfDaysCard } from '../WeekOfDaysCard';

export const Schedule: React.FC = () => {
  const week = useSelector((state: RootState) => state.weekStore);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Our products
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in
            touch, grow your business, and more.
          </p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {week.length > 0 &&
              week[0].map((item, index) => <WeekOfDaysCard key={index} index={index} item={item} week={week} />)}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="font-medium text-gray-900 whitespace-nowrap calendarTable">
              Apple MacBook Pro 17"
            </th>
            <td className="calendarTable">Silver</td>
            <td className="calendarTable">Laptop</td>
            <td className="calendarTable">$2999</td>
            <td className="calendarTable text-right">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row" className="calendarTable font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Microsoft Surface Pro
            </th>
            <td className="calendarTable">White</td>
            <td className="calendarTable">Laptop PC</td>
            <td className="calendarTable">$1999</td>
            <td className="calendarTable text-right">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th scope="row" className="calendarTable font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Magic Mouse 2
            </th>
            <td className="calendarTable">Black</td>
            <td className="calendarTable">Accessories</td>
            <td className="calendarTable">$99</td>
            <td className="calendarTable text-right">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
