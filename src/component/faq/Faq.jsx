import React, { useState } from 'react';
import FaqItem from "./faqItem";

const Faq = (props) => {

    const [showAll, setShowAll] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleLoadMore = () => {
        setShowAll(true);
    }

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setShowAll(false);
    };

    const filteredList = props.qaList.filter(qa =>
        qa.qus.toLowerCase().includes(searchQuery.toLowerCase()) ||
        qa.ans.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const itemsShow = showAll ? filteredList : filteredList.slice(0, 4);

    return (
        <div>
            <div className='grid justify-items-center'>
                <div className="mt-10">
                    <label className="flex items-center gap-2 border border-orange-400 rounded-lg">
                        <input
                            type="text"
                            className="grow px-4 py-2 border-none focus:ring-0 rounded-l-lg"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                             className="w-4 h-4 opacity-70 mr-2">
                            <path fillRule="evenodd"
                                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                  clipRule="evenodd"/>
                        </svg>
                    </label>
                </div>

                <br/>
                <div className="flex shadow-xl card w-1/3 bg-base-100 ">
                    <div className="card-body my-2 mt-3 mx-auto">
                        <FaqItem itemsShow={itemsShow}></FaqItem>
                        {!showAll && filteredList.length > 4 && (
                            <button
                                className="ml-32 mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                onClick={handleLoadMore}>Load More</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;