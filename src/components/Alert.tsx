import React from 'react';

export default function Alert({children}: {children: React.ReactNode}) {
    return (
        <div className='text-center my-2 bg-red-600 text-white rounded-xl font-bold p-3 uppercase'>
            {children}
        </div>
    )
}
