import React from 'react';

interface TitleProps {
    text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
    return <h1 className='text-2xl font-bold ml-16 pl-1 pb-2'>{text}</h1>;
};

export default Title;