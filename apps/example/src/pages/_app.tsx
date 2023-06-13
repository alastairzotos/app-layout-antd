import { AppProps } from "next/app";
import { AppLayoutProvider, createNavMenuItem } from '@bitmetro/app-layout-antd';
import { DeploymentUnitOutlined, ApiOutlined } from '@ant-design/icons';

import "../styles/globals.css";

const AppPage = ({ Component, pageProps }: AppProps) => {
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
      appBarStyles={{ backgroundColor: 'white' }}
    >
      <Component {...pageProps} />
    </AppLayoutProvider>
  )
}

export default AppPage;
