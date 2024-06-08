// import React from 'react';

// const TestimonialCard = ({ name, testimonial, imageSrc }) => {
//   return (
//     <div className="bg-white p-5 rounded-lg border shadow-md max-w-sm mx-auto my-4">
//       <div className="flex items-center">
//         <img 
//           className="w-16 h-16 rounded-full mr-4" 
//           src={imageSrc} 
//           alt={`${name}'s profile`}
//         />
//         <div>
//           <p className="text-lg font-bold">{name}</p>
//         </div>
//       </div>
//       <p className="text-gray-600 mt-3">{testimonial}</p>
//     </div>
//   );
// };

// export default TestimonialCard;
// src/components/TestimonialCard.jsx
import React from 'react';

const TestimonialCard = ({ name, image, testimonial }) => {
  return (
    <div className="bg-white p-5 rounded-lg border shadow-md flex items-center">
      <img 
        className="w-16 h-16 rounded-full mr-4" 
        src={image} 
        alt={`${name}'s profile`}
      />
      <div>
        <p className="text-lg font-bold">{name}</p>
        <p className="text-gray-600 mt-2">{testimonial}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

