import React from 'react';
import Image from 'next/image';

interface PropsType {
  companyName: string;
  desc: string;
  img: string;
  name: string;
  designation: string;
}

const TestimonialsCard: React.FC<PropsType> = ({ companyName, desc, img, name, designation }) => {
  return (
    <div data-aos="zoom-in-up">
    <div className="border border-accent p-8 h-[350px] flex flex-col justify-between shadow-md rounded-lg">
      <div>
        <h2 className="text-3xl text-accent font-semibold mb-4">{companyName}</h2>
        <p className="text-gray-300 mb-6">{desc}</p>
      </div>
      <div className="flex items-center gap-4">
        <Image
          className="grayscale rounded-full"
          src={img}
          height={50}
          width={50}
          alt="user"
        />
        <div>
          <h2 className="font-semibold text-lg">{name}</h2>
          <p className="text-gray-500 text-sm">{designation}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TestimonialsCard;
