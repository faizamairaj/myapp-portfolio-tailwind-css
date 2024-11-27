
import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id: 0,
        title: "Food Gredient",
        desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
        img:"/image 5.png",
        tags: ["React", "Node","RESTful API", "SCSS"],
    },
    {
        id: 1,
        title: "Food Gredient",
        desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
        img:"/image 4.png",
        tags: ["React", "Node","RESTful API", "SCSS"],
    },
    {
        id: 2,
        title: "Food Gredient",
        desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
        img:"/image 3.png",
        tags: ["React", "Node","RESTful API", "SCSS"],
    },
    {
        id: 3,
        title: "Food Gredient",
        desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
        img:"/image 2.png",
        tags: ["React", "Node","RESTful API", "SCSS"],
    },
    {
        id: 4,
        title: "Food Gredient",
        desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
        img:"/image 1.png",
        tags: ["React", "Node","RESTful API", "SCSS"],
    },
    {
        id: 5,
        title: "Food Gredient",
        desc: "A React & Node Based website to help you find what dishes you can make if u have certain ingredients",
        img:"/image.webp",
        tags: ["React", "Node","RESTful API", "SCSS"],
    },
]
const Cards = () => {
  return (
    <div className='container pt-32'>
        <Heading title = 'Cards'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>

            {data.map((element)=>(
             <Card
              key={element.id}
             title={element.title}
             desc={element.desc}
             img={element.img}
             tags={element.tags} 
             /> 
           ))}
        </div>
    </div>
  );
}

export default Cards;
