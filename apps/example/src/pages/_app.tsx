import { AppProps } from "next/app";
import { AppLayoutProvider, createNavMenuItem } from '@bitmetro/app-layout-antd';
import { DeploymentUnitOutlined, ApiOutlined } from '@ant-design/icons';

import "../styles/globals.css";
import { ConfigProvider, theme } from "antd";

const { darkAlgorithm } = theme;

const Inner = ({ Component, pageProps }: AppProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <AppLayoutProvider
      title="Example App"
      logo="/bm-logo-new-white.png"
      logoAlt="BitMetro logo"
      homeUrl="/"
      navItems={[
        createNavMenuItem("Test", "/test/test", <DeploymentUnitOutlined />),
        createNavMenuItem("Test 2", "/test/test2", <ApiOutlined />)
      ]}
      breadcrumbResolvers={{
        '[testId]': (id: string) => Promise.resolve(`Id: ${id}`)
      }}
      appBar={<span>testing</span>}
      appBarStyles={{ backgroundColor: colorBgContainer }}
    >
      <Component {...pageProps} />
    </AppLayoutProvider>
  )
}

const AppPage = (props: AppProps) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: darkAlgorithm
      }}
    >
      <Inner {...props} />
    </ConfigProvider>
  )
}

export default AppPage;
