import { Layout, Space } from "antd";
import React from "react";
import { Card } from "antd";
import Head from "next/head";
import { Navigation } from "components/navigation";
import { AppBar } from "components/app-bar";
import { AutoBreadcrumbs } from "components/auto-breadcrumbs";
import { useAppLayout } from "contexts";

const { Content } = Layout;

export const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { title } = useAppLayout();

  return (
    <>
      <Head>
        <title>BitMetro | {title}</title>
      </Head>
      <Layout>
        <Navigation />
        <Layout>
          <AppBar />

          <Content>
            <Space direction="vertical" style={{ width: '100%', padding: 12 }}>
              <AutoBreadcrumbs />

              <Card>
                {children}
              </Card>
            </Space>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}
