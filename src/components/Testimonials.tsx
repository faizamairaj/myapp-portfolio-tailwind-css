import React from 'react'
import Heading from './Heading';
import TestimonialsCard from './TestimonialsCard';

const testimonialsData = [
  {
  companyName: "Webflow",
  desc: `"I create visually stunning and fully responsive websites using Webflow, leveraging its no-code platform to design and develop seamless user experiences. My expertise includes custom animations, CMS integration, and optimizing sites for performance and scalability."`,
  img: "/user1.png",
  name:"Elliot John",
  designation: "Marketing Executive",
  },
  {
    companyName: "FaceBook",
    desc: `"I specialize in managing and optimizing Facebook pages and ad campaigns to enhance brand visibility and engagement. My focus is on creating compelling content, analyzing performance metrics, and driving targeted audience growth."`,
    img: "/user2.png",
    name:"John Adam",
    designation: "Senior Engineering Manager",
    },
    {
      companyName: "Google",
      desc: `"I excel in leveraging Google tools like Google Ads, Analytics, and Search Console to boost online presence and performance. My expertise lies in optimizing campaigns, analyzing data, and driving targeted traffic for measurable results."`,
      img: "/user3.png",
      name:"Adam Smith",
      designation: "Engineering Manager",
      },
];

const Testimonials = () => {
  return (
    <div className='container pt-32'>
      <Heading title='Testimonials'/> 
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {testimonialsData.map((item, index) => (
        <TestimonialsCard
        key={index}
        companyName={item.companyName}
        desc={item.desc}
        img={item.img}
        name={item.name}
        designation={item.designation}
        />
      ))}
        </div> 
    </div>
  );
}

export default Testimonials;
