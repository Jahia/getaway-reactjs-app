import React from 'react';
import {Footer, Header} from "./shared/generic/index";
import {MainPanel} from "./style";

const Layout = ({children}) => (
    <MainPanel>
        <Header/>
        <div className="panel-scrollable-container">
            {children}
            <Footer/>
        </div>
    </MainPanel>
)

export default Layout