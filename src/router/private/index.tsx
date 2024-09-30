import { FunctionComponent } from "react";
import { lazy } from 'react';

type RouteType = {
    path: string;
    element: FunctionComponent;
    layout?: FunctionComponent;
  };
const ListProductContainer = lazy(() => import('../../pages/ListProduct'));
const DetailProductContainer = lazy(() => import('../../pages/DetailProduct'));
const CreateProductContainer = lazy(() => import('../../pages/CreateProduct'));
export const PrivateRouter: RouteType[] = [
  {
    path: '/',
    element: ListProductContainer,
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