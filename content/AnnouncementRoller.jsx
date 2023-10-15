import React from 'react';
import nominated from './participants';

const AnnouncementRoller = () => {
  return (
    <div className="bg-gray-200 p-2 w-full">
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="10"
      >
        <span className="text-xl font-bold ">
            🛑 Nominated Contestants for this week:
        </span>
        {nominated.map((detail) => (
          <span className="px-4 text-xl ">{detail.name}</span>
        ))}
        
      </marquee>
    </div>
  );
};

export default AnnouncementRoller;
