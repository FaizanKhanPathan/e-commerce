import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import { Skeleton } from "../ui/skeleton";

function ProductImageUpload({
  imageFile,
  setImageFile,
  imageLoadingState,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoadingState = null,
  isEditMode,
  isCustomStyling = false,
}) {
  const inputRef = useRef(null);

  const [imageUrl, setImageUrl] = useState("")

  // console.log("uploadedImageUrl", uploadedImageUrl)



  console.log(isEditMode, "isEditMode");

  async function handleImageFileChange(event) {
    // console.log(event.target.files, "event.target.files");

    const data = new FormData()

    const selectedFile = event.target.files?.[0];
    data.append("file", selectedFile)
    data.append("upload_preset", "xguzvxc0")
    data.append("cloud_name", import.meta.env.CLOUDINARY_CLOUD_NAME)

    await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.CLOUDINARY_CLOUD_NAME}/image/upload`, data).then((response) => {
      setUploadedImageUrl(response?.data?.url)
      setImageUrl(response?.data?.url)
      // setImageUrl(response?.ima)
    }).catch((error) => {
      console.log("error", error)
    })

    // if (selectedFile) setImageFile(selectedFile);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
  }

  function handleRemoveImage() {
    // setImageFile(null);
    setImageUrl("")
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  async function uploadImageToCloudinary() {
    setImageLoadingState(true);
    const data = new FormData();
    data.append("my_file", imageFile);
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/admin/products/upload-image`,
      data
    );


    console.log(response, "response");

    if (response?.data?.success) {
      setUploadedImageUrl(response.data.result.url);
      setImageLoadingState(false);
    }
  }

  useEffect(() => {
    if (imageFile !== null) uploadImageToCloudinary();
  }, [imageFile]);

  useEffect(() => {
    setImageUrl(uploadedImageUrl)
  }, [uploadedImageUrl])

  return (
    <div
      className={`w-full  mt-4 ${isCustomStyling ? "" : "max-w-md mx-auto"}`}
    >
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`${isEditMode ? "opacity-60" : ""
          } border-2 border-dashed rounded-lg p-4`}
      >
        <Input
          id="image-upload"
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={handleImageFileChange}
          disabled={isEditMode}
        />
        {!imageUrl ? (
          <Label
            htmlFor="image-upload"
            className={`${isEditMode ? "cursor-not-allowed" : ""
              } flex flex-col items-center justify-center h-32 cursor-pointer`}
          >
            <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
            <span>Drag & drop or click to upload image</span>
          </Label>
        ) : imageLoadingState ? (
          // <Skeleton className="h-10 bg-gray-100" />
          <>
            Loading...
          </>
        ) : (
          <div className="flex items-center justify-between">
            <div className="relative">
              <img
                src={imageUrl}
                // alt={product?.title}
                className="w-full h-[300px] object-contain rounded-t-lg"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
              onClick={handleRemoveImage}
            >
              <XIcon className="w-4 h-4" />
              <span className="sr-only">Remove File</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductImageUpload;
