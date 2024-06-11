import React, { useEffect, useRef, useState } from 'react';
import TestimonialCard from '../shared/TestimonialCard';
import avatar1 from '../assets/avatar1.jpeg'; 

const testimonials = [
  {
    id: '1',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
  {
    id: '1',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
  {
    id: '1',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
  {
    id: '1',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
  {
    id: '1',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
  {
    id: '1',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
  {
    id: '1',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
  {
    id: '1',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
  {
    id: '1',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
  {
    id: '1',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
  {
    id: '1',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
  {
    id: '1',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
  {
    id: '1',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
  {
    id: '1',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
  {
    id: '1',
    name: 'Ayushi Mehra',
    image: avatar1,
    testimonial: 'Efficient, knowledgeable, and immensely helpful - their guidance made navigating Schengen visa requirements a breeze.',
  },
 
 
];

const TestimonialsSection = () => {
  const scrollContainerRef = useRef(null);
  const { width } = window.innerWidth;

  const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); 
//     }, 3000); 

//     return () => clearInterval(intervalId);
//   }, []);
useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (Math.ceil(testimonials.length / 6)));
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: (currentIndex % (Math.ceil(testimonials.length / 6))) * width,
        behavior: 'smooth',
      });
    }
  }, [currentIndex,width]);

  

//   useEffect(() => {
//     if (scrollViewRef.current) {
//       scrollViewRef.current.scrollTo({
//         x: (currentIndex % (Math.ceil(testimonials.length / 6))) * width,
//         animated: true,
//       });
//     }
//   }, [currentIndex, width]);

  const renderTestimonials = () => {
    const rows = [];
    for (let i = 0; i < testimonials.length; i += 6) {
      const items = testimonials.slice(i, i + 6);
      rows.push(
        <div key={i} className="flex flex-wrap justify-center w-full">
          {items.map((item) => (
            <div key={item.id} className="w-full md:w-1/3 p-4">
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
        className="overflow-hidden h-[calc(100vh-200px)]" 
      >
        {renderTestimonials()}
      </div>
    </div>
  );
};

export default TestimonialsSection;
