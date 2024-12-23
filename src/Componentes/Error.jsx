import imgError from "../assets/imgError.webp";

function Error() {
  return (
    <div className="flex justify-center">
      <div className=" bg-white mt-4 w-1/2    drop-shadow-xl">
        <img className="p-2 mx-auto" src={imgError} />
      </div>
    </div>
  );
}

export default Error;
