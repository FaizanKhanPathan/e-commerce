import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { handleCategoryId } from "../../redux/megaMenuSlice/megaMenuSlice";

const SubcategoriesMenu = ({ setVisibleCard, setBreadcrumbPath, categoryList }) => {
    const [activeCommodity, setActiveCommodity] = useState(null);
    const [activeSubcategory, setActiveSubcategory] = useState(null);
    const [activeNestedSubcategory, setActiveNestedSubcategory] = useState(null);
    const [activeNestedSubcategoryLevel2, setActiveNestedSubcategoryLevel2] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const updateBreadcrumb = (commodityTitle, subcategoryTitle, nestedSubcategoryTitle, nestedSubcategoryLevel2Title) => {
        const path = [commodityTitle];
        if (subcategoryTitle) path.push(subcategoryTitle);
        if (nestedSubcategoryTitle) path.push(nestedSubcategoryTitle);
        if (nestedSubcategoryLevel2Title) path.push(nestedSubcategoryLevel2Title);
        setBreadcrumbPath(path);
    };

    const handleCommodityHover = (id) => {
        setActiveCommodity(id === activeCommodity ? null : id);
        setActiveSubcategory(null);
        setActiveNestedSubcategory(null);
        setActiveNestedSubcategoryLevel2(null);
    };

    const handleCommodityClick = (commodity) => {
        const currentFilter = {
            ["category"]: [commodity?.sub_category_name?.toLowerCase()],
          };
      
          sessionStorage.setItem("filters", JSON.stringify(currentFilter));
          navigate(`/shop/listing`);
        // dispatch(handleCategoryId(commodity.id));
        // setVisibleCard(null);
        // updateBreadcrumb(commodity.title);
    };


    const reversedData = categoryList?.category?.length > 0 ? categoryList?.category?.map((_, index, array) => array[array.length - 1 - index]) : []; 
    return (
        <>
            <div className="hidden lg:flex border-t bg-white h-96 w-[95vw] overflow-x-scroll absolute z-50 right-6 scrollable-element">
                <div className={`flex space-x-3 p-3 h-full`}>
                    {
                        reversedData?.map((element) => {
                            return (
                                <div key={element.category_id} className="w-[15vw] h-full overflow-y-scroll scrollable-element">
                                    <h3 className="flex justify-center items-center font-normal text-[16px] sticky top-0 bg-white w-full border-b">
                                        {element?.category_name}
                                    </h3>
                                    <ul className="list-none p-0">
                                        <li
                                            // onMouseEnter={() => handleCommodityHover(commodity.id)}
                                            
                                            className={`cursor-pointer flex flex-col justify-between p-2 ${false ? "bg-gray-200" : ""}`}
                                        >
                                            {
                                                element?.sub_category?.map((res) => {
                                                   return(
                                                   <div className="py-1 hover:text-destructive w-fit" onClick={() => handleCommodityClick(res)}>
                                                        {res?.sub_category_name}
                                                    </div>
                                                   ) 
                                                })
                                            }

                                        </li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default SubcategoriesMenu;
