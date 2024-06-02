import { IonImg } from '@ionic/react';

import React from 'react';

const Title = () => {
  return (
    <div className="mb-8 ml-10 mt-5 flex justify-center">
      <IonImg
        src="/assets/logo-home.png"
        alt="Gusto Salvado Logo"
        className="h-12"
      />
    </div>
  );
};

export default Title;
