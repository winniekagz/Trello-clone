import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import React, { FormEvent, useState } from 'react';

interface SearchFormProps {
  onSearch: (value: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
//   const [searchValue, setSearchValue] = useState('');

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchValue(event.target.value);
//   };

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     onSearch(searchValue);
//   };

  return (
    <form className="flex items-center space-x-5   mx-auto md:flex-initial flex-1" >
      {/* ... (other form elements) */}
      <MagnifyingGlassIcon className='h-[48px] text-gray-400'/>
      <input
        type="text"
        id="simple-search"
        className="h-[48px] shadow-md outline-none rounded-md border border-gray-300 text-gray-900 text-sm  flex-1 block w-full placeholder-gray-400 focus:outline-none p-4 "
        placeholder="Search  name..."
        // value={searchValue}
        // onChange={handleChange}
        required
      />
    <button type='submit' className='hidden'>Search</button>
 
    </form>
  );
};

export default SearchForm;
