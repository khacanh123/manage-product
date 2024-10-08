import { Route, Routes } from 'react-router-dom';
import { PrivateRouter } from './private';
import { PublicRouter } from './public';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import AdminLayout from '../layout';
const Router = () => {
    // const data = useSelector((state: any) => state.auth.dataUser)
    const dispatch = useDispatch()
    const token = localStorage.getItem('token');
    if(token) {
        const decoded = jwtDecode<any>(token || '');
        // dispatch(setInfoUser(decoded))
    }
    return(
        <Routes>
            {
                token ? PrivateRouter.map((value: any, index: number) => {
                    const Container = value.element;
                    return(
                        <Route path={value.path} key={index} element={
                            <AdminLayout>
                                <Suspense fallback='Loading'>
                                <Container />
                            </Suspense>
                                </AdminLayout>
                        } />
                    )
                }) : 
                PublicRouter.map((value: any, index: number) => {
                    const Container = value.element;
                    return(
                        <Route path={value.path} key={index} element={
                            <Suspense fallback='Loading'>
                            <Container />
                        </Suspense>
                        } />
                    )
                })
            }
        </Routes>
    )
}
export default Router;