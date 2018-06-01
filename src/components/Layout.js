import React from 'react';
import {Header} from "./shared/generic/index";
import {MainPanel} from "./style";

const Layout = ({ children }) => (
    <MainPanel>
        <Header/>
        {children}
    </MainPanel>
)

export default Layout