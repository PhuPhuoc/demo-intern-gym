import { Button, Card, Col, Divider, Row } from "antd";
import "../homePage.css";
import Icon, { ArrowRightOutlined } from "@ant-design/icons";
const PlansComponent = () => {
  const WeightLossSvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6em"
      height="6em"
      viewBox="0 0 24 24"
    >
      <path d="M20.75 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" />
      <path d="M9.802 5.93a3.97 3.97 0 0 1 .721-.043c.08.004.17.01.273.02c2.383.248 4.15 2.036 5.328 3.802l.063.094a3.25 3.25 0 0 0 2.704 1.447h1.859a.75.75 0 0 1 0 1.5h-1.86a4.75 4.75 0 0 1-3.952-2.115l-.062-.094A10.95 10.95 0 0 0 14 9.39l-1.884 2.355c-.428.534-.714.894-.907 1.19c-.188.286-.241.445-.255.566c-.024.2.002.403.073.591c.044.114.135.256.386.487c.26.24.626.518 1.171.93l.096.073c.72.546 1.22.924 1.565 1.428c.197.287.352.6.463.93c.193.58.193 1.206.193 2.11V22a.75.75 0 0 1-1.5 0v-1.83c0-1.07-.01-1.435-.116-1.755a2.25 2.25 0 0 0-.277-.558c-.19-.278-.476-.505-1.33-1.152l-.028-.021c-.51-.386-.933-.707-1.252-1.001c-.334-.307-.611-.635-.772-1.056a2.75 2.75 0 0 1-.162-1.3c.052-.448.241-.835.49-1.214c.237-.362.569-.778.968-1.277l1.984-2.479c-.688-.523-1.444-.871-2.264-.956a3.156 3.156 0 0 0-.184-.014a2.513 2.513 0 0 0-.45.03c-1.065.148-2.132.74-4.45 2.057l-1.436.815a.75.75 0 1 1-.742-1.304l1.436-.815l.152-.087c2.12-1.204 3.449-1.96 4.835-2.151ZM9.23 16.425a.75.75 0 0 1 .096 1.056l-1 1.201l-.097.116c-.642.771-1.113 1.338-1.771 1.646c-.658.308-1.395.308-2.4.307H2.75a.75.75 0 0 1 0-1.5h1.158c1.222 0 1.596-.017 1.913-.165c.318-.149.57-.426 1.352-1.364l1-1.201a.75.75 0 0 1 1.057-.096Z" />
    </svg>
  );
  const BodybuildingSvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6em"
      height="6em"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="m77.492 18.457l-17.726 3.127L69.09 74.47a1630.67 1630.67 0 0 0-15.8 2.54l-6.503-36.89l-17.726 3.124l6.49 36.795a1877.847 1877.847 0 0 0-17.196 3.112l3.292 17.696c5.728-1.066 11.397-2.09 17.028-3.084l7.056 40.02l17.727-3.124l-7.04-39.93c5.304-.88 10.57-1.725 15.798-2.54l9.777 55.45l17.727-3.126l-9.697-54.99a1415.91 1415.91 0 0 1 25.18-3.38c15.54 46.39 34.697 99.995 66.936 134.448C190.86 250.992 192 268 214.56 310C192 348 176 412 167.21 471l-48 6v15H192c16-48 64-144 64-144s48 96 64 144h72.79v-15l-48-6C336 412 320 348 294 310c26-42 24.175-59.585 35.83-89.377c32.25-34.452 51.42-88.075 66.967-134.478c8.314 1.04 16.697 2.16 25.18 3.38l-9.696 54.99l17.728 3.124l9.777-55.45c5.23.815 10.494 1.66 15.8 2.54l-7.042 39.93l17.727 3.125l7.056-40.02c5.63.993 11.3 2.017 17.028 3.083l3.292-17.696c-5.78-1.075-11.507-2.11-17.195-3.113l6.49-36.796l-17.727-3.125l-6.504 36.89a1564.46 1564.46 0 0 0-15.8-2.54l9.324-52.886l-17.726-3.127l-9.406 53.35C365.982 63.31 310.982 59.04 256 59.04c-54.98 0-109.983 4.27-169.102 12.767l-9.406-53.35zM256 76.98c35.53 0 71.07 1.83 107.822 5.463c-14.082 34.858-38.454 73.504-63.203 101.967C290.293 199.27 274.35 209 256 209s-34.294-9.73-44.62-24.59c-24.748-28.463-49.12-67.11-63.202-101.967c36.75-3.633 72.29-5.463 107.822-5.463zM256 97c-20.835 0-39 20.24-39 47s18.165 47 39 47s39-20.24 39-47s-18.165-47-39-47z"
      />
    </svg>
  );
  const CyclingSvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6em"
      height="6em"
      viewBox="0 0 24 24"
    >
      <path d="M14 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm4 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6ZM6 21a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm5.5-3l1.5-4l-4.882-2l3-3.5l3 2.5h3.5" />
    </svg>
  );
  const WeightLossIcon = (props) => (
    <Icon style={{marginBottom:50}} component={WeightLossSvg} {...props} />
  );
  const BodybuildingIcon = (props) => (
    <Icon style={{marginBottom:50}} component={BodybuildingSvg} {...props} />
  );
  const CyclingIcon = (props) => (
  <Icon style={{marginBottom:50}} component={CyclingSvg} {...props} />
  );
  return (
    <div className="plans">
      <Divider orientation="left" style={{ fontSize: 40 }}>
        Fitness Plans & Nutritions
      </Divider>
      <Row
        justify="center"
        align="middle"
        style={{ alignItems: "center", textAlign: "center" }}
        gutter={12}
      >
        <Col span={6}>
          <Card bordered={false}>
            <WeightLossIcon />
            <p style={{fontSize:32}}>WEIGHT LOSS</p>
            <Divider style={{ borderColor: "black" }}></Divider>
            <p>More Info <span style={{marginLeft:100}}><ArrowRightOutlined /></span></p>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{
              backgroundColor: "transparent",
              border: "none",
              borderLeft: "1px solid black",
              borderRight: "1px solid black",
              borderRadius: 0,
            }}
          >
            <BodybuildingIcon></BodybuildingIcon>
            <p style={{fontSize:32}}>BODYBUILDING</p>
            <Divider style={{ borderColor: "black" }}></Divider>
            <p>More Info <span style={{marginLeft:100}}><ArrowRightOutlined /></span></p>
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false} style={{ backgroundColor: "transparent" }}>
            <CyclingIcon></CyclingIcon>
            <p style={{fontSize:32}}>CYCLING</p>
            <Divider style={{ borderColor: "black" }}></Divider>
            <p>More Info <span style={{marginLeft:100}}><ArrowRightOutlined /></span></p>
          </Card>
        </Col>
      </Row>
      <Divider orientation="left" style={{ fontSize: 40 }}>
        Subscribe To Plans
      </Divider>
      <Row 
      justify="center"
        align="middle"
        style={{ alignItems: "center", textAlign: "center" }}
        gutter={150}>
        <Col span={6}>
        <Card style={{backgroundImage: 'linear-gradient(rgba(57, 57, 57, 0.25), rgba(57, 57, 57, 0))'}}> 
            <h3 style={{fontSize:24, marginBottom:10}}>WEIGHT LOSS</h3>
            <p style={{marginBottom:30}}>Plan Exp. 16/11/2024</p>
            <p style={{marginBottom:10, fontSize:24}}>$1200 <span style={{color:"gray", fontSize:14}}>/Month</span></p>
            <p style={{marginBottom:10}}>Streaming</p>
            <Button block>Select Plan</Button>
          </Card>
        </Col>
        <Col span={6}>
        <Card style={{backgroundImage: 'linear-gradient(rgba(57, 57, 57, 0.25), rgba(57, 57, 57, 0))'}}> 
            <h3 style={{fontSize:24, marginBottom:10}}>WEIGHT LOSS</h3>
            <p style={{marginBottom:30}}>Plan Exp. 16/11/2024</p>
            <p style={{marginBottom:10, fontSize:24}}>$1200 <span style={{color:"gray", fontSize:14}}>/Month</span></p>
            <p style={{marginBottom:10}}>Streaming</p>
            <Button block>Select Plan</Button>
          </Card>
        </Col>
        <Col span={6}>
        <Card style={{backgroundImage: 'linear-gradient(rgba(57, 57, 57, 0.25), rgba(57, 57, 57, 0))'}}> 
            <h3 style={{fontSize:24, marginBottom:10}}>WEIGHT LOSS</h3>
            <p style={{marginBottom:30}}>Plan Exp. 16/11/2024</p>
            <p style={{marginBottom:10, fontSize:24}}>$1200 <span style={{color:"gray", fontSize:14}}>/Month</span></p>
            <p style={{marginBottom:10}}>Streaming</p>
            <Button block>Select Plan</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PlansComponent;
