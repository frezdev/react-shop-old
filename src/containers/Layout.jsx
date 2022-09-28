import React from "react";
import Header from '@components/Header';
import '@styles/Layout.scss';

function Layout({children}) {
  return (
    <div className="Layout">
      <Header />
      <div className="Layout-contain">
        {children}
      </div>
    </div>
  );
}
export default Layout;