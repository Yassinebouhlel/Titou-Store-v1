import {IoSearchSharp} from 'react-icons/io5';

function SearchInput({className = '', placeholder, ...props}: any) {
  return (
    <div className="relative w-8/12  ">
      <input
        className={`rounded-full py-2 pl-16 pr-8 focus:outline-none ${className}`}
        placeholder={placeholder}
        type="text"
        {...props}
      />
      <IoSearchSharp className="absolute top-0 h-full w-16 rounded-full px-5  hover:top-0 hover:bg-[#b2ac9c7d] " />
    </div>
  );
}

export default SearchInput;
