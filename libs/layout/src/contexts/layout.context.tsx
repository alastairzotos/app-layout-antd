import { Wrapper } from 'components';
import React from 'react';
import { MenuProps } from 'antd';
import { IBreadcrumbResolvers } from 'components/auto-breadcrumbs';

export interface IAppLayoutContextProps {
  title: string;
  logo: string;
  logoAlt: string;
  homeUrl: string;
  navItems: MenuProps['items'];
  breadcrumbResolvers: IBreadcrumbResolvers;
  appBar: React.ReactNode;
  appBarStyles?: React.CSSProperties;
}

const AppLayoutContext = React.createContext<IAppLayoutContextProps>({
  title: '',
  logo: '',
  logoAlt: '',
  homeUrl: '',
  navItems: [],
  breadcrumbResolvers: {},
  appBar: null,
});

export const AppLayoutProvider: React.FC<React.PropsWithChildren<IAppLayoutContextProps>> = ({
  children,
  ...props
}) => {
  return (
    <div style={{ width: "100%" }}>
      <AppLayoutContext.Provider value={props}>
        <Wrapper>
          {children}
        </Wrapper>
      </AppLayoutContext.Provider>
    </div>
  )
}

export const useAppLayout = () => React.useContext(AppLayoutContext);
