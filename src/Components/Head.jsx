import React, { useEffect, useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/Constant";
import { GOOGLE_API_KEY } from "../Utils/Constant";

const Head = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
 const [showSuggestions,setShowSuggestions] = useState(false)



  useEffect(() => {
    //make an api call
    const Timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(Timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestions(json);
  };

  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }
  return (
<div className="grid grid-flow-col m-2 ml-0 p-5 shadow-lg w-full">
    <div className="flex items-center gap-2 col-span-1">
        <RxHamburgerMenu
            onClick={() => toggleMenuHandler()}
            className="cursor-pointer"
            size={30}
        />
        <img
            className="h-14"
            src="https://th.bing.com/th/id/OIP._IfEaUssjZQwZ1u92b1_GgHaEK?w=324&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="logo"
        />
    </div>

    <div className="flex items-center col-span-10 justify-center relative"> {/* Added 'relative' */}
        <div className="flex">
            <input
                type="text"
                className="border w-[550px] h-2/4 rounded-l-3xl p-3 outline-zinc-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}  
                onBlur={() => setShowSuggestions(false)} 
            />
            <button className="border flex justify-center items-center p-3 px-5 rounded-r-3xl bg-zinc-200">
                <IoIosSearch size={18} />
            </button>
        </div>
        
      
        {showSuggestions &&  suggestions[1]?.length > 0 && (  
            <div className="absolute top-full  w-[550px] mr-[4vw] bg-white flex flex-col rounded-md border border-zinc-200 shadow-lg mt-1 z-10"> 
                <ul>
                    {suggestions[1]?.map((suggestion, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-3 p-2 hover:bg-gray-300"
                        >
                            <IoIosSearch size={18} /> {suggestion}
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>

    <div className="flex items-center col-span-1">
        <img
            className="h-8"
            src="https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png"
            alt="user"
        />
    </div>
</div>
    
  );
};

export default Head;
