import { Button, Col, Row, Tag } from "antd";
import Logo from "../../assets/Logo.png"
const BenefitsComponent = () => {
    return (
        <div style={{marginTop: '130px', marginBottom: '30px'}}>
            <Row justify="center" style={{marginBottom:20}}>
                <Col span={8} style={{fontSize:40}}>Why Join With Us?</Col>
                <Col span={8}>
                <div style={{ backgroundColor: 'transparent'}}>
                    <ul>
                        <li style={{fontSize:24, margin:'20px'}}>Best Gym</li>
                        <li style={{fontSize:24, margin:'20px'}}>Experts Coach</li>
                        <li style={{fontSize:24, margin:'20px'}}>Good Workout Facilities</li>
                        <li style={{fontSize:24, margin:'20px'}}>Consultation With Experts</li>
                        <Button type="primary" style={{borderRadius:0, marginTop:30}}>See More Benefits</Button>
                    </ul>
                </div>
                </Col>
            </Row>
            <Row gutter={12} justify="center" style={{marginTop: '130px'}}>
                <Col span={4}>
                <img src={Logo} alt="" style={{marginBottom: '20px'}}/>
                <h2 style={{paddingRight: '40px'}}>Support Your Need To Much Fitness Goal</h2>    
                </Col>
                <Col span={4}>
                    <ul>
                        <h2 style={{fontSize:20, marginBottom:20}}>Company</h2>
                        <li style={{listStyle:"none", marginBottom:5}}>About</li>
                        <li style={{listStyle:"none", marginBottom:5}}>Careers</li>
                        <li style={{listStyle:"none", marginBottom:5}}>Blogs</li>
                    </ul>
                </Col>
                <Col span={4}>
                <ul>
                        <h2 style={{fontSize:20, marginBottom:20}}>Contact</h2>
                        <li style={{listStyle:"none", marginBottom:5}}>Help \FAQ</li>
                        <li style={{listStyle:"none", marginBottom:5}}>Press</li>
                </ul>
                </Col>
                <Col span={4}>
                <ul>
                        <h2 style={{fontSize:20, marginBottom:20}}>More</h2>
                        <li style={{listStyle:"none", marginBottom:5}}>Program</li>
                        <li style={{listStyle:"none", marginBottom:5}}>Plan</li>
                        <li style={{listStyle:"none", marginBottom:5}}>Method</li>
                </ul>
                </Col>
                <Col span={4}>                         
                    <h2 style={{fontSize:20, marginBottom:20}}>Popular Tags</h2>
                    <Tag style={{padding:"10px",background:"#D3D3D3",marginTop:"6px"}} className="">Abs</Tag>
                    <Tag style={{padding:"10px",background:"#D3D3D3",marginTop:"6px"}} className="">Workout</Tag>
                    <Tag style={{padding:"10px",background:"#D3D3D3",marginTop:"6px"}} className="">Nutrition</Tag>         
                    <Tag style={{padding:"10px",background:"#D3D3D3",marginTop:"6px"}} className="">Boxing</Tag>
                    <Tag style={{padding:"10px",background:"#D3D3D3",marginTop:"6px"}} className="">Gym</Tag>
                    <Tag style={{padding:"10px",background:"#D3D3D3",marginTop:"6px"}} className="">Facilities</Tag>                 
                    <Tag style={{padding:"10px",background:"#D3D3D3",marginTop:"6px"}} className="">Plans</Tag>
                    <Tag style={{padding:"10px",background:"#D3D3D3",marginTop:"6px"}} className="">Trainers</Tag>                
                </Col>
            </Row>
        </div>
    );
};

export default BenefitsComponent;