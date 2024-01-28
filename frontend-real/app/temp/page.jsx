'use client'
import React from 'react';
import FundCard from './details';  // Import FundCard component

// Sample values for the props
const sampleProps = {
  owner: 'John Doe',
  title: 'Education Fund',
  description: 'Supporting education for underprivileged children',
  target: '$10,000',
  deadline: '2024-12-31',  // Date format: 'YYYY-MM-DD'
  amountCollected: '$5,000',
  image: 'https://example.com/fund-image.jpg',  // URL to the fund image
  handleClick: () => {
    // Handle click event
    console.log('Card clicked!');
  },
};

// Use the FundCard component with sample props
const ExampleComponent = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <FundCard {...sampleProps} />
    </div>
  );
};

export default ExampleComponent;
