import React from 'react';
import notFound from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='w-100 img-fluid' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;