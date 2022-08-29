import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './Layout.scss';

function Layout() {
  return (
    <>
      <div className="layout-header-container">
        <Header />
      </div>
      <div className="border-top">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
