import React, { useEffect, useRef, useState } from 'react'

import { FaPhoneVolume } from "react-icons/fa";
import { LuArrowLeftRight } from "react-icons/lu";
import SubcategoriesMenu from './SubcategoriesMenu';
import { getAllBrands, getAllSubMenu } from '@/store/admin/brand-slice';
import { useDispatch, useSelector } from 'react-redux';
import { setIsTypeChange } from '@/store/shop/products-slice';
import { getSearchResults } from '@/store/shop/search-slice';
import SearchResults from './SearchResults';

import gmtLogo from "../../assets/gmt-main-logo.png"

const MegaMenuSearch = () => {
    const dispatch = useDispatch()

    const submenuRef = useRef(null); // Ref to track the submenu container


    const getBrands = useSelector((state) => state?.adminBrands?.brandList)
    const categoryList = useSelector((state) => state?.adminBrands?.allSubMenuList)
    const isTypeChange = useSelector((state) => state?.shopProducts?.isTypeChange)
    const { searchResults } = useSelector((state) => state.shopSearch);

    // console.log("isTypeChange",isTypeChange)
    // console.log("categoryList>>>>>",categoryList)

    const [keyword, setKeyword] = useState("")
    const [categorySwitch, setCategorySwitch] = useState("1")
    const [selectedCategoryValue, setSelectedCategoryValue] = useState(null)
    const [selectedCategoryValueData, setSelectedCategoryValueData] = useState([])
    const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

    const handleMouseOverBrand = (categoryId) => {
        setSelectedCategoryValueData(categoryList?.find((ele) => ele?.brand_id == categoryId))

        setSelectedCategoryValue(categoryId);
        setIsSubMenuVisible(true);
    };

    const handleMouseLeaveSubMenu = () => {
        setIsSubMenuVisible(false);
    };


    useEffect(() => {
        dispatch(getAllSubMenu());
    }, []);

    useEffect(() => {
        dispatch(getAllBrands());
    }, []);

    useEffect(() => {
        dispatch(getSearchResults(keyword))
    }, [keyword])

    const handleSwitchCategory = () => {
        // console.log("handleSwitchCategory", categorySwitch)
        if (isTypeChange == "1") {
            // setCategorySwitch("2")
            dispatch(setIsTypeChange("2"))
        } else {
            // setCategorySwitch("1")
            dispatch(setIsTypeChange("1"))
        }
    }



    // Function to handle clicking outside the submenu
    const handleClickOutside = (event) => {
        if (submenuRef.current && !submenuRef.current.contains(event.target)) {
            setIsSubMenuVisible(false); // Close the submenu if the click is outside
        }
    };

    // Add event listener for clicks outside when the submenu is visible
    useEffect(() => {
        if (isSubMenuVisible) {
            document.addEventListener('click', handleClickOutside);
        }

        // Cleanup event listener when submenu is not visible
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isSubMenuVisible]);

    return (
        <div className='text-[12px] border-b'>

            <div className='flex justify-between lg:justify-center gap-5 px-6'>
                <div className='flex justify-center lg:justify-center items-center h-20 w-full sm:w-max'>
                    <div className='flex justify-center items-center gap-4 w-full'>
                        <div className='w-full h-max relative'>
                            <input type="text" onChange={(e) => setKeyword(e.target.value)} value={keyword} placeholder='Search entire store...' className='w-full sm:w-[450px] py-3 rounded-md outline-none px-4 text-[14px] border shadow-lg' />
                            <SearchResults searchResults={searchResults} keyword={keyword} setKeyword={setKeyword} />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-8'>
                    <div className='hidden lg:flex justify-start items-center gap-3 text-primary hover:text-destructive cursor-pointer' >
                        <span>
                            <FaPhoneVolume className='text-[35px] ' />
                        </span>
                        <span className='flex flex-col items-start'>
                            <span className='font-semibold text-[14px] '>
                                Have questions
                            </span>
                            <span className='font-semibold text-[13px] '>
                                {"(478)-305-9071"}
                            </span>
                        </span>
                    </div>
                    <div className='text-[#43AF42] hover:text-destructive cursor-pointer text-[14px] font-semibold flex justify-start items-center gap-2' onClick={() => handleSwitchCategory()}>
                        {
                            isTypeChange !== "1" ? <>
                                <>
                                    <span>
                                        <LuArrowLeftRight className='font-bold text-2xl' />
                                    </span>
                                    <span className='hidden sm:flex'>
                                        Go to Accessories
                                    </span>
                                </>
                            </> : <>
                                <>
                                    <span>
                                        <LuArrowLeftRight className='font-bold text-2xl' />
                                    </span>
                                    <span className='hidden sm:flex'>
                                        Go to Parts
                                    </span>
                                </>
                            </>
                        }
                    </div>
                </div>
            </div>





            <div className='border border-gray-400 hidden lg:flex justify-center gap-5 py-3'>
                {
                    getBrands?.map((res, index) => {
                        return (
                            <div key={index} className='cursor-pointer text-[14px] font-medium hover:text-destructive mx-3' onMouseOver={() => handleMouseOverBrand(res?._id)}>
                                {res?.brand_name}
                            </div>
                        )
                    })
                }
            </div>
            {isSubMenuVisible && (
                <div
                    ref={submenuRef} // Attach ref to submenu
                    onMouseEnter={() => setIsSubMenuVisible(true)}
                    onMouseLeave={handleMouseLeaveSubMenu}
                >
                    <SubcategoriesMenu
                        categoryList={selectedCategoryValueData}
                        setVisibleCard={false}
                    />
                </div>
            )}
        </div>
    )
}

export default MegaMenuSearch