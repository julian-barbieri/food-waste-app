import React from 'react';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1 className="ml-16 pb-2 pl-1 text-2xl font-bold">{text}</h1>;
};

export default Title;
