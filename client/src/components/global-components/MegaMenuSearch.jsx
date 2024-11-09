import React, { useEffect, useState } from 'react'

import { FaPhoneVolume } from "react-icons/fa";
import { LuArrowLeftRight } from "react-icons/lu";
import SubcategoriesMenu from './SubcategoriesMenu';
import { getAllBrands, getAllSubMenu } from '@/store/admin/brand-slice';
import { useDispatch, useSelector } from 'react-redux';


const MegaMenuSearch = () => {
    const dispatch = useDispatch()
    const getBrands = useSelector((state) => state?.adminBrands?.brandList)
    const categoryList = useSelector((state) => state?.adminBrands?.allSubMenuList)

    // console.log("categoryList>>>>>",categoryList)

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

    return (
        <div className='text-[12px] border-b'>
            <div className='flex justify-center lg:justify-end items-center h-20 pr-0 md:pr-36'>
                <div className='flex justify-center items-center gap-4'>
                    <div>
                        <input type="text" placeholder='Search entire store...' className='w-[250px] sm:w-[450px] py-3 rounded-md outline-none px-4 text-[14px] border shadow-lg' />
                    </div>
                    <div className='hidden lg:flex justify-center items-center gap-8'>
                        <div className='flex justify-start items-center gap-3 text-primary hover:text-destructive cursor-pointer'>
                            <span>
                                <FaPhoneVolume className='text-[35px] ' />
                            </span>
                            <span className='flex flex-col items-start'>
                                <span className='font-semibold text-[14px] '>
                                    Have questions
                                </span>
                                <span className='font-semibold text-[12px] '>
                                    {"(000)-000-0000"}
                                </span>
                            </span>
                        </div>
                        <div className='text-[#43AF42] hover:text-destructive cursor-pointer text-[14px] font-semibold flex justify-start items-center gap-2'>
                            <span>
                                <LuArrowLeftRight className='font-bold text-2xl' />
                            </span>
                            <span>
                                Go to Accessories
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border border-gray-400 hidden lg:flex justify-start py-3 '>
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