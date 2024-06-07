export default function Tile({tileTitle, tileValue}) {
  return (
    <>
      <div className="w-full md:w-[48%] lg:w-[24%] mb-3 bg-white  p-10 shadow-lg rounded-lg">
        <h2 className="text-4xl text-center font-light text-gray-700 mb-2">
          {tileValue}
        </h2>
        <h3 className="text-xl font-light text-center">{tileTitle}</h3>
      </div>
    </>
  );
}
