import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';
import { routeBuilder } from '../utils/routes';
import 'antd/dist/antd.css';

const { Header, Content, Footer, Sider } = Layout;

const navigableKeys: { [key: string]: string } = { productsList: 'products-list' };

const menuItems: IAdminMenuItem[] = [
  {
    label: 'Products',
    key: 'products',
    icon: <DesktopOutlined />,
    children: [{ label: 'List', key: navigableKeys.productsList }]
  }
];

const AdminLayout = ({ children }: { children: React.ReactNode[] }) => {
  const history = useHistory();
  const [collapsed, setCollapsed] = React.useState<boolean>(false);

  const onCollapse = (): void => {
    setCollapsed((prevState) => !prevState);
  };

  const onClick: MenuProps['onClick'] = (event) => {
    const { key } = event;

    switch (key) {
      case navigableKeys.productsList: {
        history.push(routeBuilder.admin.listProducts);

        break;
      }

      default:
        break;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible={true} collapsed={collapsed} onCollapse={onCollapse}>
        <Link to={routeBuilder.root}>
          <div
            className="logo"
            style={{ height: '32px', margin: '16px', background: 'rgba(255,255,255,0.3)' }}
          />
        </Link>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={menuItems}
          onClick={onClick}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
