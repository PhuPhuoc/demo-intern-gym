import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

const HeaderComponents = () => {
    return (
        <>
            <Layout>
                <Header
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <div className="demo-logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={new Array(3).fill(null).map((_, index) => ({
                            key: String(index + 1),
                            label: `nav ${index + 1}`,
                        }))}
                    />
                </Header>
            </Layout>

        </>
    );
};

export default HeaderComponents;