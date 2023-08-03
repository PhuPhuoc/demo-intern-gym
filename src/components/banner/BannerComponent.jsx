import "../homePage.css";
import { Button, Card, Col, Image, Row } from "antd";
import {PlayCircleOutlined} from "@ant-design/icons"
const BannerComponent = () => {
  return (
    <div className="banner">
      <Row style={{marginTop:60}} gutter={16}>
        <Col>
          <Card
            style={{
              width: 650,
              backgroundColor: "transparent",
            }}
            bordered={false}
          >
            <h1 style={{ textAlign: "center", fontSize: 90 }}> Transform <span style={{ display: "block", color:"orange" }}> your body </span></h1>
            <p style={{ textAlign: "center", marginBottom: 50, fontSize: 20, color:"grey" }}>
              We are dedicated to helping you transform your body and mind
              through the power of fitness.
            </p>
            <div style={{ textAlign: "center" }}>
              <Button
                size="large"
                style={{
                  marginRight: 20,
                }}
                type="primary"
              >
                Get Started
              </Button>
              <Button
              size="large"
              type="default"
              >
                <PlayCircleOutlined />
                Watch Review
              </Button>
            </div>
          </Card>
        </Col>
        <Col span={4}>
          <Image
            style={{ borderRadius: 20 }}
            preview={false}
            src="https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          ></Image>
        </Col>
        <Col span={4}>
          <Image
            style={{marginTop:40, borderRadius: 20}}
            preview={false}
            src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          ></Image>
        </Col>
        <Col span={4}>
          <Image
            style={{marginTop:80, borderRadius:20}}
            preview={false}
            src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          ></Image>
        </Col>
      </Row>
    </div>
  );
};

export default BannerComponent;
