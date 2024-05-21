import {
  IonButton,
  IonContent,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
} from '@ionic/react';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ZodType, z } from 'zod';

import { useUserControllerCreate } from '@/api';

const schema = z
  .object({
    email: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z
      .string()
      .min(6, { message: 'Password is too short' })
      .max(20, { message: 'Password is too long' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], // path of error
  });

type FormFields = z.infer<typeof schema>;

const Register: React.FC = () => {
  const userCreateMutation = useUserControllerCreate({
    mutation: {
      onError: (error) => {
        console.log({ error });
      },
      onSuccess: (data) => {
        console.log({ data });
      },
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) =>
    userCreateMutation.mutateAsync({
      data,
    });

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="mx-auto mt-10 grid max-w-md place-content-center">
          <div className="mb-8 flex justify-center">
            <IonImg
              src="/assets/logo.png"
              alt="Gusto Salvado Logo"
              className="h-44"
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <IonItem className="w-full" >
                <IonLabel className="text-dark font-semibold" position="stacked" class="">
                  Nombre
                </IonLabel>
                <IonInput
                  placeholder="Alice"
                  {...register('firstName')}
                ></IonInput>
              </IonItem>
              <IonItem className="w-full">
                <IonLabel className="text-dark font-semibold" position="stacked">Apellido</IonLabel>
                <IonInput
                  placeholder="Freis"
                  {...register('lastName')}
                ></IonInput>
              </IonItem>
            </div>

            <IonItem className="mt-4 w-full">
              <IonLabel className="text-dark font-semibold" position="stacked">Email</IonLabel>
              <IonInput
                placeholder="usuario@dominio.com"
                type="email"
                {...register('email')}
              ></IonInput>
            </IonItem>
            <IonItem className="mt-4 w-full">
              <IonLabel className="text-dark font-semibold" position="stacked">Contraseña</IonLabel>
              <IonInput
                placeholder=""
                type="password"
                {...register('password')}
              ></IonInput>
            </IonItem>
            <IonItem className="mt-4 w-full">
              <IonLabel className="text-dark font-semibold" position="stacked">Confirmar Contraseña</IonLabel>
              <IonInput
                placeholder=""
                type="password"
                {...register('confirmPassword')}
              ></IonInput>
            </IonItem>

            <div className="mt-6 grid place-content-center gap-4">
              <IonButton color="secondary" shape="round" type="submit">
                Registrarse
              </IonButton>

              <Link to="/login" className="text-dark text-center font-semibold">
                Ingresar
              </Link>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
