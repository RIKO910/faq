import React, {useState} from 'react';

const FaqItem = (props) => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    return (
        <div>
            {props.itemsShow.map((qa, index) => (
                // daisy

                // <div key={index} className="collapse collapse-arrow bg-base-200">
                //     <input type="radio" name="my-accordion-2" defaultChecked={index === 0} />
                //     <div className="text-xl font-medium collapse-title">
                //         {qa.qus}
                //     </div>
                //     <div className="collapse-content">
                //         {qa.ans}
                //     </div>
                // </div>
                // <div className='my-5 border-2 p-4'>
                //     <div className='flex justify-between items-center'>
                //         <p className='text-3xl font-medium'>{qa.qus}</p>
                //         <button className='text-3xl' onClick={() => onClick(id)}>
                //             {isOpen ? <IoCaretUpSharp/> : <IoCaretDownSharp/>}
                //         </button>
                //
                //     </div>
                //     {isOpen && <p className='text-lg'>{answer}</p>}
                // </div>

                // regular
                    <div key={index} className="border border-gray-300 rounded-lg mt-2">
                        <div className="flex justify-between w-96 px-3 bg-zinc-100 ">
                            <div className="">
                                {qa.qus}
                            </div>
                            <div>
                                <button >
                                    {/*{qa.qus}*/}
                                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                         onClick={() => handleToggle(index)}
                                         aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {expandedIndex === index && (
                            <div className="px-4 py-2 bg-amber-200">
                                {qa.ans}
                            </div>
                        )}
                    </div>

                )
            )}
        </div>
    )
        ;
};

export default FaqItem;