import React from 'react'

const Button=(
    {
        children, className, ...props
    }
) =>
{
    return(
        <button className=' p-4  inline-flex items-center justify-center active:shadow-inner shadow-xl  border-t-1  border-l-1 cursor-pointer'>
            {children}
        </button>
    );
};
export default Button;