import { FunctionComponent } from "react";
import { lazy } from 'react';

type RouteType = {
    path: string;
    element: FunctionComponent;
    layout?: FunctionComponent;
  };
const SignInContainer = lazy(() => import('../../pages/Login'));
export const PublicRouter: RouteType[] = [
  {
    path: '/signin',
    element: SignInContainer,
  },
  {
    path: '/',
    element: SignInContainer,
  },
];