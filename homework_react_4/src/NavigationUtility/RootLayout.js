import {MainNavigation} from "./MainNavigation";
import {Outlet} from "react-router-dom";

export const RootLayout = () => {
    return (
        <div style={{margin:'10px',padding:'10px'}}>
            <MainNavigation/>
            <Outlet />
        </div>
    );
}