import React from 'react';
import { Divider, MenuProps, theme, Layout } from 'antd';
import { Menu } from 'antd';
import { useRouter } from 'next/router';
import { HEADER_HEIGHT, NAVIGATION_WIDTH } from 'components/sizes';
import { Logo } from 'components/logo';
import { useAppLayout } from 'contexts';

const { Sider } = Layout;

export type NavMenuItem = Required<MenuProps>['items'][number];

export const createNavMenuItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: NavMenuItem[],
  type?: 'group',
): NavMenuItem => ({
  key,
  icon,
  children,
  label,
  type,
})

export const Navigation: React.FC = () => {
  const {
    token: { colorBgContainer, colorBorderSecondary },
  } = theme.useToken();

  const router = useRouter();
  
  const { navItems } = useAppLayout();

  const onClick: MenuProps['onClick'] = (e) =>
    router.push(e.key);

  return (
    <Sider
      width={NAVIGATION_WIDTH}
      style={{ backgroundColor: colorBgContainer, borderRight: `1px solid ${colorBorderSecondary}` }}
    >
      <Logo />

      <Divider style={{ margin: 0 }} />

      <Menu
        onClick={onClick}
        style={{ width: NAVIGATION_WIDTH, height: `calc(100vh - ${HEADER_HEIGHT}px)` }}
        selectedKeys={['/' + router.pathname.split('/')[1]]}
        mode="inline"
        items={navItems}
      />
    </Sider>
  );
};
