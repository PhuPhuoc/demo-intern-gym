import { Card, Carousel, Col, Row } from "antd";
import image1 from "../assets/Rectangle 8.png";
import image2 from "../assets/Rectangle 9.png";
import image3 from "../assets/Rectangle 10.png";
import "./homePage.css";

const HomePage = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const cardsData = [
    {
      title: "ALEX PHOENIX",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      image: image1,
    },
    {
      title: "WALTER WHITE",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      image: image2,
    },
    {
      title: "JESIE PINKMAN",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      image: image3,
    },
    {
      title: "JESIE PINKMAN",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      image: image3,
    },
    {
      title: "WALTER WHITE",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      image: image2,
    },
    {
      title: "ALEX PHOENIX",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
      image: image1,
    },
  ];
  const cardGroups = [];
  for (let i = 0; i < cardsData.length; i += 1) {
    cardGroups.push(cardsData.slice(i, i + 1));
  }

  return (
    <div>
      <h6
        style={{
          fontSize: "60px",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          marginTop: "20px",
        }}
      >
        Join our <span style={{ color: "orange" }}>Trainer</span>
      </h6>
      <div
        style={{
          marginTop: "10px",
          height: "400px",
        }}
      >
        <Carousel autoplay dots afterChange={onChange}>
          {cardGroups.map((group, index) => (
            <div key={index}>
              <Row
                gutter={16}
                justify="space-evenly"
                style={{ margin: "20px", width: "100%" }}
              >
                {group.map((card, cardIndex) => (
                  <Col key={cardIndex} span={16}>
                    <Card
                    hoverable
                    width="500px"
                      style={{
                        backgroundColor: "#bdd4e7",
                        backgroundImage:
                          "linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)",
                          borderRadius:"25px",
                          width:"100%"
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{ marginTop: "50px", marginRight: "100px" }}
                        >
                          <h6
                            style={{
                              fontSize: "50px",
                              fontWeight: "bold",
                              color: "goldenrod",
                            }}
                          >
                            {card.title}
                          </h6>
                          <h1 style={{ fontSize: "16px", marginTop: "20px" }}>
                            {card.description}
                          </h1>
                        </div>
                        <img
                          src={card.image}
                          style={{ width: "800px", borderRadius: "20px" }}
                        ></img>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
