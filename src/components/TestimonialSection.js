import React, { useEffect, useRef, useState } from 'react';
 import TestimonialCard from '../shared/TestimonialCard';
import avatar1 from '../assets/avatar1.jpeg'; 
import CountUp from 'react-countup';

const testimonials = [
  {
    id: '1',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
  {
    id: '2',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
  {
    id: '3',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
  {
    id: '4',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
  {
    id: '5',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
  {
    id: '6',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
  {
    id: '7',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
  {
    id: '8',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
  {
    id: '9',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
  {
    id: '10',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
  {
    id: '11',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
  {
    id: '12',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
 

 
 
];




const TestimonialsSection = () => {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 6));
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * currentIndex;
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const renderTestimonials = () => {
    const rows = [];
    for (let i = 0; i < testimonials.length; i += 6) {
      const items = testimonials.slice(i, i + 6);
      rows.push(
        <div key={i} className="flex flex-wrap w-full">
          {items.map((item) => (
            <div key={item.id} className="w-1/3 p-4">
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="p-8 m-8 bg-gray-100">
      <h2 className="text-5xl font-bold text-center mt-5 mb-10">Testimonials</h2>
      <div
        ref={scrollContainerRef}
        className="whitespace-nowrap overflow-hidden  scroll-smooth"
      >
        <div className="flex">
          {renderTestimonials()}
        </div>
      </div>
      <div className="bg-[#000080] text-white mt-5 rounded p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        <div className="text-center p-4">
          <CountUp end={50} duration={2.75} className="text-4xl md:text-5xl font-bold" /><span className='text-5xl p-1 font-bold'>+</span>
          <p className="text-xl md:text-xl mt-2">happy customers</p>
        </div>
        <div className="text-center p-4">
          <CountUp end={100000} duration={2.75} className="text-4xl md:text-5xl font-bold" /><span className='text-5xl p-1 font-bold'>+</span>
          <p className="text-xl md:text-xl mt-2">helped our customers save money</p>
        </div>
        <div className="text-center p-4">
          <CountUp end={200} duration={2.75} className="text-4xl md:text-5xl font-bold" /><span className='text-5xl p-1 font-bold'>+</span>
          <p className="text-xl md:text-xl mt-2">appointments already booked</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TestimonialsSection;

