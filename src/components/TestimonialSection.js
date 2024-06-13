import React from 'react';
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
 
  

 
 
 
];




const TestimonialsSection = () => {
  
 

  return (
    <div className="p-8 m-8 bg-gray-100">
      <h2 className="text-5xl font-bold text-center mt-5 mb-6">Testimonials</h2>
      <div className="container mx-auto  py-9">
      <div className='mb-3  '>
       <div className='scrollx '>
        {testimonials.slice(0,3).map((testimonial, index) => (
          <div className='group'>
            <TestimonialCard
            key={index}
            name={testimonial.name}
            testimonial={testimonial.testimonial}
            image={testimonial.image}
           
          />
          </div>
          
        ))}</div>  
      </div>

      <div className="mt-5 ">
       <div className='scrollx'>
        {testimonials.slice(0,3).map((testimonial, index) => (
          <div className='group'>
            <TestimonialCard
            key={index}
            name={testimonial.name}
            testimonial={testimonial.testimonial}
            image={testimonial.image}
           
          />
          </div>
          
        ))}</div>
         
      </div>
    </div>
    </div>
  );
};

export default TestimonialsSection;

