import type { FC } from "react";
import Image from "next/image";

const HomePage: FC = () => {
  const bannerText = [
    "Changing Lives",
    "Making Disciples",
    "Changing the World",
  ];
  return (
    <div className="">
      <div className="relative w-full h-[50vh] md:h-[80vh] lg:h-[100vh]">
        {/* <div className="w-100 "> */}
        <Image
          src="/images/building.png"
          alt="Hero Background"
          layout="fill"
          // objectFit="cover" // Ensure it covers the area on larger screens
          // className="object-contain object-center md:object-cover"
        />
      </div>
      <section className="container mx-auto py-10 text-black text-center">
        <h2 className="text-3xl py-4 font-bold bg-blue-500 text-white border rounded">
          Welcome to Our Church
        </h2>
        <div className="text-lg px-4 py-4 rounded bg-white">
          <p className="text-xl">All are welcome</p>

          <h3 className="text-2xl bg-blue-500 text-white border rounded mt-2">
            Spreading the Gospel
          </h3>
          <p className="mt-2">
            The Potter&apos;s House Christian Church enthusiastically follows
            Jesus&apos; words to share the Gospel with the world. We&apos;re a
            local church making a big difference by sharing the life-changing
            message of Jesus Christ. Come be a part of it!
          </p>
          <div className="flex justify-center flex-col md:flex-row">
            {bannerText.map((item, index) => (
              <div
                key={index}
                className="text-xl px-4 py-2 bg-blue-500 text-white font-bolds rounded m-2"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="container mx-auto py-10 text-black text-center bg-white"
        id="services"
      >
        <h2 className="text-3xl py-4 font-bold bg-blue-500 text-white border rounded">
          Service Times &amp; Location
        </h2>
        <p>
          <span className="font-bold text-xl">Sunday:</span>
          <span className="text-lg">11:00am</span>
        </p>
        <p>
          <span className="font-bold text-xl">Wednesday:</span>
          <span className="text-lg">7:00pm</span>
        </p>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.394827472621!2d-122.58550102358275!3d45.32961134240829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549570c88b03e147%3A0xbc3c88571d127ac!2s19146%20Molalla%20Ave%20A%2C%20Oregon%20City%2C%20OR%2097045!5e1!3m2!1sen!2sus!4v1739492733637!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
