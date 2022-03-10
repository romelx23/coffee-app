import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { HomeScreen } from '../pages/HomeScreen';
import { MenuScreen } from '../pages/MenuScreen';
import { LoginScreen } from '../pages/LoginScreen';
import { NotFound } from '../pages/NotFound';

export const DashBoardRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="" element={<HomeScreen />} />
                    <Route path="menu" element={<MenuScreen />} />
                    <Route path="login" element={<LoginScreen />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="category/:name" element={<HomeScreen />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
