import {NavLink} from 'react-router-dom'
export const MainNavigation = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to={'/'}>
                        {' '}
                        Home
                    </NavLink></li>
                    <li><NavLink to={'/biography'}>
                        {' '}
                        Biography
                    </NavLink></li>
                    <li><NavLink to={'/famousPainting'}>
                        {' '}
                        Most Famous Painting
                    </NavLink></li>
                    <li><NavLink to={'/paintingsCollection'}>
                        {' '}
                        Collection of Other Paintings
                    </NavLink></li>
                    <li><NavLink to={'/personal'}>
                        {' '}
                        Personal Info
                    </NavLink></li>
                    <li><NavLink to={'/form'}>
                        {' '}
                        Form
                    </NavLink></li>
                </ul>
            </nav>
        </header>
    );
}