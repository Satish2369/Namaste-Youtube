import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const VideoCard = ({ info }) => {
  
  





  if (!info) {
    return <div className='p-2 m-2 w-[23vw] shadow-lg  rounded-lg'>Loading...</div>;
  }

  const { statistics = {}, snippet = {} } = info; // Provide defaults to avoid destructuring errors
  const { channelTitle = 'Channel not available', title = 'Title not available', thumbnails = {} } = snippet;
  const thumbnailUrl = thumbnails?.medium?.url




  return (
    <div className='p-2 m-2 w-[21vw] h-[25vw] shadow-lg  rounded-lg' >
      <img 
        className="p-2 w-full h-[13vw] rounded-2xl" 
        src={thumbnailUrl} 
        alt={title} 
      />
      <ul>
        <li className='font-bold text-center p-1'>{title}</li>
        <li className='text-center p-1'>{channelTitle}</li>
        <li className='text-center p-1'>{statistics.viewCount ? `${statistics.viewCount} views` : 'Views data not available'}</li>
      </ul>
    </div>
  );
}

export default VideoCard;
