import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;
import HeaderComponent from './navbar/HeaderComponents';
import BannerComponent from "./banner/BannerComponent";
import PlansComponent from "./intro/PlansComponent"
import TrainerComponents from "./trainer/TrainerComponents";
import BenefitsComponent from "./intro/BenefitsComponent"

const HomePage = () => {
  return (
    <>
      <Layout style={{maxWidth: '100%'}}>
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            backgroundColor: 'white',
            maxWidth: '100%'
          }}
        >
          <HeaderComponent />
        </Header>
        <Content
          className="site-layout"
          style={{
            padding: '0 50px',
            maxWidth: '100%'
          }}
        >
          <BannerComponent />
          <PlansComponent />
          <TrainerComponents />
          <BenefitsComponent />
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Gym Layout Demo ©2023 Created by PhuPhuoc vs NhatAnh vs HoangDanh
        </Footer>
      </Layout>
    </>
  );
};

export default HomePage;