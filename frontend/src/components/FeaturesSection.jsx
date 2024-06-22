import React from 'react';
import BasicCard from './BasicCard';
import '../styles/Features-Section.css';
import HomeIcon from '@mui/icons-material/Home';
import Groups2Icon from '@mui/icons-material/Groups2';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

function FeaturesSection() {
  const features = [
    { icon: <HomeIcon sx={{fontSize: 50}} />, title: 'Single Room', numAds: 5 },
    { icon: <Groups2Icon sx={{fontSize: 50}}  />, title: 'Shared Room', numAds: 8 },
    { icon: <BedroomParentIcon sx={{fontSize: 50}} /> , title: 'Hostel Type', numAds: 3 },
    { icon: <StarIcon sx={{fontSize: 50}} />, title: 'Luxury', numAds: 2 },
    { icon: <SchoolIcon sx={{fontSize: 50}} />, title: 'Student Specific', numAds: 6 },
    { icon: <WorkIcon sx={{fontSize: 50}} />, title: 'Employee Specific', numAds: 4 },
    { icon: <MaleIcon sx={{fontSize: 50}}  />, title: 'Men Only', numAds: 7 },
    { icon: <FemaleIcon sx={{fontSize: 50}} />, title: 'Women Only', numAds: 5 },
  ];

  return (
    <div className='features-section'>
      <div className='left'>
        {features.map((feature, index) => (
          <BasicCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            numAds={feature.numAds}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
