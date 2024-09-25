/* eslint-disable @typescript-eslint/no-explicit-any */
import nexiosInstance from "@/config/nexios.config";
import AddCar from "./components/AddCar";

const CarsManagement = async () => {
  const res: any = await nexiosInstance.get("/cars", {
    next: {
      tags: ["carsTable"],
    },
  });

  return (
    <>
      <AddCar />

      {res?.data?.data?.map((car: any) => (
        <div key={car._id}>
          <h1>{car.name}</h1>
        </div>
      ))}
    </>
  );
};

export default CarsManagement;
