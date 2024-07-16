import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Bag from '../components/Bag';

const ItemView = () => {
    return (
        <>
            {/* Joshua's section */}
            <Sidebar />
            <div>Product details</div> 
            <Bag />
        </>
    );
};

export default ItemView;