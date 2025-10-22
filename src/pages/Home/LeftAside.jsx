import React from 'react';
import CategoryList from '../../components/CategoryList/CategoryList';

const LeftAside = () => {
    return (
        <aside className='col-span-3'>
            <CategoryList></CategoryList>
        </aside>
    );
};

export default LeftAside;