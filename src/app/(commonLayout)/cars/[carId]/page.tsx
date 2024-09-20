/* eslint-disable @typescript-eslint/no-explicit-any */
const CarsDetailPage = ({
  params,
  searchParams,
}: {
  params: { carId: string };
  searchParams: any;
}) => {
  console.log(searchParams);
  //fetch with filter parameterd

  return (
    <div>
      Cars Number {params.carId} {searchParams.car}
    </div>
  );
};

export default CarsDetailPage;
