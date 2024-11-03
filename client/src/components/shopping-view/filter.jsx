import { filterOptions } from "@/config";
import { Fragment } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import { useSelector } from "react-redux";

function ProductFilter({ filters, handleFilter }) {
  const getBrands = useSelector((state) => state?.adminBrands?.brandList)


  // console.log("getBrands>>>>>", getBrands)
  // console.log("filterOptions>>>>>", filterOptions)
  // console.log("filters>>>>>", filters)

  const filterOptionsValue = {
    brand: getBrands?.map((ele) => {
      return {
        id: ele?.brand_name?.toLowerCase(),
        label: ele?.brand_name
      }
    })
  }

  console.log("filterOptionsValue",filterOptionsValue)
  return (
    <div className="bg-background rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-extrabold">Filters</h2>
      </div>
      <div className="p-4 space-y-4">
        {Object.keys(filterOptionsValue).map((keyItem) => (
          <Fragment>
            <div>
              <h3 className="text-base font-bold">{keyItem}</h3>
              <div className="grid gap-2 mt-2">
                {filterOptionsValue[keyItem].map((option) => (
                  <Label className="flex font-medium items-center gap-2 ">
                    <Checkbox
                      checked={
                        filters &&
                        Object.keys(filters).length > 0 &&
                        filters[keyItem] &&
                        filters[keyItem].indexOf(option.id) > -1
                      }
                      onCheckedChange={() => handleFilter(keyItem, option.id)}
                    />
                    {option.label}
                  </Label>
                ))}
              </div>
            </div>
            <Separator />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProductFilter;
