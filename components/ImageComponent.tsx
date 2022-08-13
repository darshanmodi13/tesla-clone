import Image from "next/image";
import img from "../public/Images/car.jpg";
const ImageComponent = () => {
  return (
    <>
      <div className="relative grid w-full h-[95vh] z-0">
        <Image
          src={img}
          layout="responsive"
          alt="img"
          className="max-w-[100vw] max-h-[100vh] h-full w-full m-auto block object-cover"
          priority={true}
        />
        <div className="absolute top-0 w-full h-full">
          <h1 className="z-20 text-center mt-24 text-[2.5rem] font-[500] tracking-wide">
            Model 3
          </h1>
          <p className="w-full text-center tracking-wide">
            Order Online for{" "}
            <span className="border-b">Touchless Delivery</span>
          </p>
          <div className="flex justify-center gap-5 text-[14px] absolute bottom-28 max-md:bottom-20 max-sm:bottom-16 w-full max-md:flex-col max-md:items-center">
            <button
              className="bg-btn-bg
             text-white pt-[6px] pb-[6px] border-1 rounded-[50px] pl-10 pr-10  w-52 tracking-wider"
            >
              Custom Order
            </button>
            <button
              className="bg-white
             text-btn-bg pt-[6px] pb-[6px] border-1 rounded-[50px] pl-10 pr-10  w-52 tracking-wider"
            >
              Existing Inventory
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageComponent;
