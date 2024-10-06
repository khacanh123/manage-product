import { FunctionComponent } from "react";
import { lazy } from 'react';

type RouteType = {
    path: string;
    element: FunctionComponent;
    layout?: FunctionComponent;
  };
const ListProductContainer = lazy(() => import('../../pages/ListProduct'));
const BecomeMechanicContainer = lazy(() => import('../../pages/ListBecomeMechanic'));
const DetailProductContainer = lazy(() => import('../../pages/DetailProduct'));
const CreateProductContainer = lazy(() => import('../../pages/CreateProduct'));
export const PrivateRouter: RouteType[] = [
  {
    path: '/',
    element: ListProductContainer,
  },
  {
    path: '/become-mechanic',
    element: BecomeMechanicContainer,
  },
  {
    path: '/detail/:id',
    element: DetailProductContainer,
  },
  {
    path: '/create',
    element: CreateProductContainer,
  },
];