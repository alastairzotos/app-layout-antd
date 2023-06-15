# Antd layout

This is a simple package to help me bootstrap a simple antd application quickly.

> Requires the following packages:
```
next: ^13.4.4
react: ^18.2.0
antd: ^5.6.1
```

Example:

```ts
export default function App({}: AppProps) {
  return (
    <AppLayoutProvider
      title="App name"
      logo="/logo.png"
      logoAlt="My Logo"
      homeUrl={"/"}
      navItems={[
        createNavMenuItem("Config", urls.config.home(), <SettingOutlined />),
        createNavMenuItem("Projects", urls.projects.home(), <AppstoreOutlined />),
        createNavMenuItem("API Keys", urls.apiKeys.home(), <ApiOutlined />),
      ]}
      breadcrumbResolvers={{
        "[projectId]": async (id) => (await getProjectById(id)).name,
      }}
      appBar={<p>Hello user</p>}
      appBarStyles={{ backgroundColor: "white" }}
    >
      <Component {...pageProps} />
    </AppLayoutProvider>
  )
}
```