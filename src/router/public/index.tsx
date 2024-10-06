import { FunctionComponent } from "react";
import { lazy } from 'react';

type RouteType = {
    path: string;
    element: FunctionComponent;
    layout?: FunctionComponent;
  };
const SignInContainer = lazy(() => import('../../pages/Login'));
const listUser = lazy(() => import('../../pages/ListProduct'));
export const PublicRouter: RouteType[] = [
  {
    path: '/signin',
    element: SignInContainer,
  },
  {
    path: '/',
    element: SignInContainer,
  },
  {
    path: '/private',
    element: listUser,
  },
];