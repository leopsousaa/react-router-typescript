import React from 'react';

import { Container } from './styles';

export interface ILayoutComponent {
    children: React.ReactNode;
}

const LayoutComponent: React.FC<ILayoutComponent> = ({ children }) => {
    return <Container>{children}</Container>;
};

export default LayoutComponent;
