import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-lg:flex-col-reverse gap 10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full hover:scale-105 duration-300 cursor-pointer"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3">Special</span>{" "}
          offers
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Discover stylish nike arrival, quality comfort and immovation for your
          active life Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our authentification to details and excellent ensure your satisfaction
          Totam voluptatum nisi deleniti alias exercitationem..
        </p>
        <div className="mt-11  flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
