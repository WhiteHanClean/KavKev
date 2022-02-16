import React from 'react';
import { useRouter } from 'next/router';

const Category = (id) => {
    const router = useRouter()

    console.log(router)
    return (
        <div>
            {id}
        </div>
    );
};

export default Category;