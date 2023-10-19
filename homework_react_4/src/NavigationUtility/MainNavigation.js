import {NavLink} from 'react-router-dom'
export const MainNavigation = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to={'/'}>
                        {' '}
                        City Info
                    </NavLink></li>
                    <li><NavLink to={'/mostpopularmonument'}>
                        {' '}
                        City's Most Popular Monument
                    </NavLink></li>
                    <li><NavLink to={'/othermonuments'}>
                        {' '}
                        Other Monuments
                    </NavLink></li>
                    <li><NavLink to={'/citypictures'}>
                        {' '}
                        Pictures of the City
                    </NavLink></li>
                    <li><NavLink to={'/pictureform'}>
                        {' '}
                        Pictures Form
                    </NavLink></li>
                </ul>
            </nav>
        </header>
    );
}