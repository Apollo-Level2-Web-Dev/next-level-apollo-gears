/* eslint-disable @typescript-eslint/no-explicit-any */

import nexiosInstance from "@/config/nexios.config";
import { Card, CardFooter, CardHeader, Image, Link } from "@nextui-org/react";

const Cars = async () => {
  // const res = await fetch("http://localhost:5000/api/v1/cars", {
  //   next: {},
  //   cache: "no-store",
  // });

  //res,json()

  const { data }: any = await nexiosInstance.get("/cars", {
    cache: "no-store",
    next: {},
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      {/* Page Title */}
      <p className="text-4xl font-bold text-gray-800 dark:text-gray-100 mt-6 mb-14 tracking-wider">
        All Cars
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 w-full max-w-7xl">
        {data?.data?.map((item: any) => (
          <Card
            key={item._id}
            className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:z-20"
          >
            {/* Card Header */}
            <CardHeader className="absolute z-10 top-4 left-4 flex flex-col items-start space-y-1 backdrop-blur-md bg-white/10 p-2 rounded-md">
              <p className="text-xs text-white/70 uppercase font-semibold tracking-wider">
                Rating: {item.rating}
              </p>
              <h4 className="text-white font-bold text-xl uppercase">
                {item.name}
              </h4>
            </CardHeader>

            {/* Car Image */}
            <Image
              removeWrapper
              alt={item.name}
              className="z-0 w-full h-full object-cover transition-transform duration-500"
              src={item.image}
            />

            {/* Card Footer */}
            <CardFooter className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-lg bg-white/20 dark:bg-black/20 border-t border-gray-200 dark:border-gray-600 flex justify-between items-center">
              <div className="flex flex-col space-y-1">
                <p className="text-sm text-white/90 font-medium">
                  Brand: {item.brand}
                </p>
                <p className="text-xs text-white/70">Color: {item.color}</p>
              </div>
              <Link
                href={`cars/${item._id}`}
                className="text-sm font-semibold text-blue-400 dark:text-blue-300 hover:underline"
              >
                View Details
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cars;
