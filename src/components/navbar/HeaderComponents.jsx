import { Menu } from 'antd';
import { AppstoreOutlined, HomeOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { useState } from 'react';
import logo from "../../assets/Logo.png";
import "./header.css";

const items = [
    {
        label: 'Home',
        key: 'Home',
        icon: <HomeOutlined />,

    },
    {
        label: 'About',
        key: 'About',
        icon: <AppstoreOutlined />,
    },
    {
        label: 'Services',
        key: 'Services',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Service 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Service 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: 'Contact',
        key: 'Contact',
        icon: <MailOutlined />,
    },
    {
        label: 'Join Us',
        key: 'joinUs',
    },
];

const HeaderComponents = () => {
    const [current, setCurrent] = useState('Home');
    const onClick = (e) => {
        setCurrent(e.key);
    }
    return (
        <>
            <Row style={{width: '100%'}}>
                <Col span={12}>
                    <img src={logo} alt="" style={{marginLeft: '170px', marginTop: '12px'}}/>
                </Col>
                <Col span={12}>
                    <Menu style={{marginLeft: '190px'}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                </Col>
            </Row>
        </>
    );
};

export default HeaderComponents;