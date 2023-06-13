import { Layout, theme } from "antd";
import { HEADER_HEIGHT } from "components/sizes";
import { useAppLayout } from "contexts";
import React from "react";

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  height: HEADER_HEIGHT,
  paddingInline: 50,
  lineHeight: '64px',
  zIndex: 10000,
};

export const AppBar: React.FC = () => {
  const {
    token: { colorBorderSecondary },
  } = theme.useToken();

  const { appBar, appBarStyles = {} } = useAppLayout();

  return (
    <Header style={{ ...headerStyle, ...appBarStyles, borderBottom: `1px solid ${colorBorderSecondary}` }}>
      {appBar}
    </Header>
  )
}
