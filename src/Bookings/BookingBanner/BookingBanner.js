import React from 'react';
import { DayPicker } from 'react-day-picker';
import se from '../../images/ser.png'
import vec from '../../images/vector.jpg'
const BookingBanner = ({selected,setSelected}) => {
    return (
        <div className='grid gap-5 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-8 mt-8 ' style={{backgroundImage:`url(${vec})`,backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <div>
            <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      
    />
            </div>
            <div>
                <img src={se} alt="" />
            </div>
        </div>
    );
};

export default BookingBanner;