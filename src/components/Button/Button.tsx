import React from 'react';

const Button = ({onClick, btnText}) => {
    return (
        <div className="flex flex-1 justify-center mt-6">
          <button
            onClick={onClick}
            className="flex justify-center self-center items-center gap-2 w-36 h-16 cursor-pointer rounded-full shadow-xl text-white text-xl font-semibold bg-slate-900 hover:shadow-md hover:shadow-[#fff] active:scale-95 hover:scale-105 duration-300"
          >
            {btnText}
          </button>
        </div>

    )
}

export default Button