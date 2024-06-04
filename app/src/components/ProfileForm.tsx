import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ZodType, z } from 'zod';

import { useAuthControllerMe } from '@/api';

interface ProfileFormProps {
  // Define your props here
}

const ProfileForm: React.FC<ProfileFormProps> = () => {
  // State variables
  const schema = z.object({
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
  });

  type FormFields = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data);
  
  const query = useAuthControllerMe();



  return (
    <div className="ml-14 mr-14 mt-10 flex justify-around">
      <div className="mb-8 grid flex-col">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/*First name*/}
            <IonItem className="mt-4 w-full">
              <IonLabel className="text-dark font-semibold" position="stacked">
                Nombre
              </IonLabel>
              <IonInput value={query.data?.firstName}/>
            </IonItem>

            {/*Last name*/}
            <IonItem className="mt-4 w-full">
              <IonLabel className="text-dark font-semibold" position="stacked">
                Last name
              </IonLabel>
              <IonInput value={query.data?.lastName}/>
            </IonItem>
          </div>

          {/*Email*/}
          <IonItem className="mt-4 w-full">
            <IonLabel className="text-dark font-semibold" position="stacked">
              Email
            </IonLabel>
            <IonInput value={query.data?.email}/>
          </IonItem>

          {/*Save button*/}
          <div className="mt-6 grid place-content-center gap-4">
            <IonButton color="secondary" shape="round" type="submit">
              Guardar
            </IonButton>
          </div>
        </form>
      </div>
      {/* Divide line */}
      <div className="mr-14 flex-col rounded-2xl border border-orange" />
      <div className="mr-8 flex-col justify-start">
        <IonButton>Tus locales</IonButton>
      </div>
    </div>
  );
};

export default ProfileForm;
function useUserControllerFindMyUser() {
    throw new Error('Function not implemented.');
}

