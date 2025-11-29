import Support from "../Home/Support";
import SectionHeading from "../SectionHeading";

const AboutServices = () => {
  return (
    <div className="my-24">
      <div className="flex justify-center text-center mb-4">
        <SectionHeading
          heading={"Our "}
          colorHeading={"Services"}
          discription={
            "Customer service should not be a department. It should be the entire company."
          }
        />
      </div>
      <Support />
    </div>
  );
};

export default AboutServices;
