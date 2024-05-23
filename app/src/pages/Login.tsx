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
import { Link, useHistory } from 'react-router-dom';
import { z } from 'zod';

import { useAuthControllerLogin } from '@/api';
import { useAuthStoreActions } from '@/stores/auth';

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: 'Password is too short' })
    .max(20, { message: 'Password is too long' }),
});

type FormFields = z.infer<typeof schema>;

const Login: React.FC = () => {
  const { login, setUser } = useAuthStoreActions();
  const history = useHistory();

  const loginMutation = useAuthControllerLogin({
    mutation: {
      onError: (error) => {
        alert('Error: ' + error);
        console.log({ error });
      },
      onSuccess: async (data) => {
        const locationToRedirect = await login(data.accessToken);
        setUser(data.user);
        history.push(locationToRedirect ?? '/');
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
    loginMutation.mutateAsync({
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
            <IonItem className="mt-4 w-full">
              <IonLabel className="text-dark font-semibold" position="stacked">
                Email
              </IonLabel>
              <IonInput type="email" {...register('email')}></IonInput>
            </IonItem>
            <IonItem className="mt-4 w-full">
              <IonLabel className="text-dark font-semibold" position="stacked">
                Contraseña
              </IonLabel>
              <IonInput type="password" {...register('password')}></IonInput>
            </IonItem>

            <div className="mt-6 grid place-content-center gap-4">
              <IonButton color="secondary" shape="round" type="submit">
                Iniciar sesion
              </IonButton>

              <Link
                to="/register"
                className="text-dark text-center font-semibold hover:underline"
              >
                Registrarse
              </Link>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
