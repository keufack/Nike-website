import { shoe8 } from "../assets/images";
import Button from "../components/Button";
const SuperQuality = () => {
  return (
    <section
      id="abouts us "
      className="flex justify-between items-center max-lg:flex-col 
    gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          We provide You.
          <span className="text-coral-red inline-block mt-3">Super</span>
          <span className="text-coral-red inline-block mt-3">Quality</span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Discover stylish nike arrival, quality comfort and immovation for your
          active life Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Totam voluptatum nisi deleniti alias exercitationem..
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our authentification to details and excellent ensure your satisfaction
        </p>
        <div className="mt-11 ">
          <Button label="view details" />
        </div>
      </div>
      <div className="flex-1 flex  justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className=" object-contain cursor-pointer hover:scale-105 duration-300 "
        />
      </div>
    </section>
  );
};

export default SuperQuality;
