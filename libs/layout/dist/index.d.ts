import React from 'react';
import { MenuProps } from 'antd';

type IBreadcrumbResolver = (id: string) => Promise<string>;
type IBreadcrumbResolvers = Record<string, IBreadcrumbResolver>;

interface IAppLayoutContextProps {
    title: string;
    logo: string;
    logoAlt: string;
    homeUrl: string;
    navItems: MenuProps['items'];
    breadcrumbResolvers: IBreadcrumbResolvers;
    appBar: React.ReactNode;
    appBarStyles?: React.CSSProperties;
}
declare const AppLayoutProvider: React.FC<React.PropsWithChildren<IAppLayoutContextProps>>;
declare const useAppLayout: () => IAppLayoutContextProps;

type NavMenuItem = Required<MenuProps>['items'][number];
declare const createNavMenuItem: (label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: NavMenuItem[], type?: 'group') => NavMenuItem;

export { AppLayoutProvider, IAppLayoutContextProps, IBreadcrumbResolver, IBreadcrumbResolvers, createNavMenuItem, useAppLayout };
