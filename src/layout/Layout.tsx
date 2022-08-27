import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './Layout.scss';

function Layout() {
  return (
    <>
      <Header />
      <div className="border-top">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
