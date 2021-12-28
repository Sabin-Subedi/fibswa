import React, { PureComponent, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FiChevronDown } from "react-icons/fi";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/Navbar";
import useMediaQuery from "../../hooks/useMediaQuery";

import LogoShape from "../../vectors/LogoShape";
import HelpCards from "./HelpCards";
import "./Homescreen.css";


import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
const  InstaIcon = require("../../vectors/img/6.png")
const MailIcon = require( "../../vectors/img/4.png")
const TelegramIcon = require( "../../vectors/img/5.png")
interface Props {}
const data = [
  { name: "Group A", value: 400, fill: "#FF49E5" },
  { name: "Group B", value: 300, fill: "blue" },
  { name: "Group C", value: 300, fill: "pink" },
  { name: "Group D", value: 200, fill: "#fff" },
];

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
     
      {/* <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      /> */}
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 6}
        fill={fill}
      />
      {/* <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      /> */}
      {/* <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" /> */}
      {/* <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#fff"
        fontWeight={700}
        fontSize={22}
      >{`${value} %`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#fff"
        fontSize={16}
      >
        {`${payload.name}`}
      </text> */}
      <text x={cx} y={cy-10} dy={8} textAnchor="middle" fill={fill}>
      {`${value} %`}
      </text>
      <text x={cx} y={cy+10} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
    </g>
  );
};
const data01 = [
    {
        name: "Presale",
        value: 47.00,
        fill: "#73E7F5",
      },
      {
        name: "Burn",
        value: 5.00,
        fill: "#4254E7",
      },
  {
    name: "Dev Funds",
    value: 2.5,
    fill: "#F02A55",
  },
 
  {
    name: "Land Funds",
    value: 5.00,
    fill: "#F1C68A",
  },
  {
    name: "Marketing",
    value: 5.00,
    fill: "#4254E7",
  },
  {
    name: "Liquidity",
    value: 35.5,
    fill: "#FF49E5",
  },

];

const HomeScreen: React.FC<Props> = () => {
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const [activeindex, setActiveindex] = useState(0);
  const onPieEnter = (data: any,index: any) => {
    setActiveindex(index);
  };

  return (
    <div className="position-relative" style={{ zIndex: 5 }}>
      {/* <div
        className="position-absolute bg-body-dark top-0 -z-1"
        style={{ width: "100%", height: "100%" }}
      ></div> */}
      {/* <div
        className="position-absolute bg-body-blend top-0"
        style={{ zIndex: -1 }}
      /> */}
      <NavigationBar />
      <Container  className="heroContainer">
        {/* Hero Section */}
        <main className="d-flex flex-column justify-content-center heroSection">
          <Row className="justify-content-center">
            <Col xs={12} md={8} className="mx-auto d-flex flex-column mt-3">
              <h1 className="text-center text-white display-5 fw-bolder">
                Swap your crypto tokens <br /> in{" "}
                <span className="gradient_light gradient_text">
                  JUST ONE TAP
                </span>
              </h1>
              <p className="text-center text_light mt-3 paraContent">
                FibSwap is a multi-chain, decentralized exchange allowing you to
                swap tokens from one chain to another chain with the click of a
                button.{" "}
              </p>
              <div className="position-relative d-flex">
                {/* <HeroCards /> */}
                <img src="/img/hero.svg" className="mx-auto" style={{width: isMediumScreen ? '60%' : '100%'}} alt="Ethereum" />
                <div
                  className="position-absolute bg_glow_light top-50 left-50 transform-middle"
                  style={{ width: "100%", height: "100%", zIndex: -1 }}
                />
              </div>

              <div className="d-flex flex-column align-items-center pointer mt-5">
                <a
                  href="#about"
                  className="d-flex flex-column align-items-center text-decoration-none"
                >
                  <p className="text-white fs-4 text-center mb-0">Know more</p>
                  <FiChevronDown className="text-white fs-2 " />
                </a>
              </div>
            </Col>
          </Row>
        </main>

        {/* About Section  */}
        <section id="about" className="py-5">
          <div className="my-5 pt-5">
            <h2 className="text-center text-white display-6 fw-bolder">
              What is{" "}
              <span className="gradient_light gradient_text">Fibswap</span>?
            </h2>

            <p className="text-center text_light col-12 col-md-6 mx-auto mb-0 fw-light paraContent">
              FibSwap aims to disrupt the crypto trading world by enabling users
              to swap tokens across multiple chains using something called IMBS.
            </p>
          </div>
          <Row xs={1} md={2} className="align-items-center ">
            <Col xs={12} md={6} className="pe-lg-5">
              <h3 className="gradient_light gradient_text fw-bolder">
                We built a DEx that will disrupt crypto trading forever.
              </h3>
              <p className="text-white fs-5 opacity-75 my-4">
                The FibSwap DEX is an Interoperable Multichain Bridge System
                (IMBS) DEX which utilizes the FibSwap Smart Algorithm.
              </p>
              <p className="text-white" style={{ opacity: 0.7 }}>
                This creates a bridge to swap tokens from one chain to another
                in one seamless, instant transaction.
                <br />
                <br />
                FibSwap will have the lowest fees on the market too with its
                unique lowest fee swap aggregator.
                <br />
                <br />
                $FIBO, is the governance token of FibSwap DEX, all fees and
                internal accounting will be in $FIBO tokens. Users of the
                platform will need $FIBO tokens to swap between chains which
                will further reduce the supply helping to increase the price
                longer term.
              </p>
            </Col>
            <Col xs={12} md={6} className="position-relative">
              <img src="/img/about.svg" width="100%" alt="" />
              <div
                className="logo_glow top-40 start-50 translate-middle-x"
                style={{ top: "40%" }}
              />
            </Col>
          </Row>
        </section>

        {/* Features Section  */}

        <section className="py-5">
          <div className="my-md-5 py-md-5 ">
            <h2 className="text-center text-white display-6 fw-bolder gradient_light gradient_text">
              How We Help?
            </h2>

            <p className="text-center text_light col-12 col-md-6 mx-auto mb-0 fw-light mb-5">
              FibSwap provides a great value proposition to users of the
              platform and to token holders which should provide the network
              effect needed for mass adoption. One of the main questions we
              should all be asking when evaluating projects is what problem does
              this project solve?
            </p>
          </div>
          <HelpCards />
        </section>

      {/* White Paper description */}
        <section className="py-5">
          <div className="my-md-5 pt-md-5  ">
            <h2 className="text-center text-white display-6 fw-bolder gradient_light gradient_text">
              White Paper
            </h2>

            <p className="text-center text_light col-12 col-md-8 mx-auto mb-0 fw-light mb-5 paraContent">
              Our whitepaper is a dynamic document. As opposed to a static
              document we are constantly updating the whitepaper with the most
              up to date information.
            </p>
          </div>

          <div className="position-relative mb-5 col-11 col-md-5 col-lg-3  mx-auto  bg-transparent d-flex flex-column align-items-center px-4 pb-2">
            <div className="position-absolute w-full h-full card_blue_gradient -z-1" />
            <div style={{ marginTop: "-3rem" }}>
              <LogoShape height="250" />
            </div>
            <h2
              className="gradient_light gradient_text fw-bolder fs-1"
              style={{ marginTop: "-2.5rem" }}
            >
              Fibswap
            </h2>

            <div className="text-center mt-5 ">
              <p className="mb-0 fw-light text-white opacity-50 fs-5">
                White Paper
              </p>
              <p className="mb-0 text-white fw-bolder fs-6">Version 5.0</p>
              <p className="mb-0 text_light">July 2021</p>

              <h5 className="mt-4 text-white">
                Decentralized Finance One Click Cross Platform Swaps
              </h5>
            </div>
            <p className="gradient_text gradient_light mt-5">
              https://fibswap.io
            </p>
          </div>

          <button className="bg-transparent mt-4 border-0 d-block position-relative col-12 col-md-6 col-lg-4 mx-auto">
            <div
              className="gradient_light  px-4 py-3 rounded"
              style={{ opacity: 0.2 }}
            >
              <p className="mb-0 fw-bold fs-4 invisible">
                View The Whitepaper{" "}
              </p>
            </div>
            <p className="mb-0 opacity-100 fw-bold fs-4  gradient_light gradient_text position-absolute top-50 start-50 translate-middle text-center w-full">
              View The Whitepaper
            </p>
          </button>
        </section>

        {/* Privacy section  */}

        <section className="py-5">
          <div className="my-lg-5 pt-md-5  ">
            <h2 className="text-center text-white display-6 fw-bolder gradient_light gradient_text ">
              Enjoy Your Privacy
            </h2>

            <p className="text-center text_light col-12 col-md-8 mx-auto mb-0 fw-light mb-5">
              As part of FibSwap’s core commitment to providing a secure DEX
              experience for our users, we will continually update and review
              our audit opinions and are in talks with several auditors prior to
              launch of V1.0 of the FibSwap DEx.
            </p>
          </div>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="px-md-5 mb-5 mb-md-0 d-flex">
              <img
                src="/img/fingerprint.svg"
                className="mx-auto"
                width="90%"
                alt=""
              />
            </Col>
            <Col xs={12} md={6} className="text_light opacity-75 fs-6">
              <h2 className="card_border gradient_text fw-bold d-inline-block">
                Commitment
              </h2>
              <p className="fs-6">
                Our commitment to maintaining a secure, safe and reliable
                platform form part of the core values of FibSwap. To ensure
                this, we have commissioned several Audits from various companies
                to continually review our process to protect our users and our
                platform from external exploits and vulnerabilities.
                <br /> <br />
                We are delighted to announce that the first of these audits have
                been completed by TechRate and we are proud to tell you that we
                have passed with flying colours.
              </p>
            </Col>
          </Row>
        </section>

        {/* Token Distribution section  */}

        <section className="py-5">
          <div className="my-md-5 pt-5  ">
            <h2 className="text-center text-white display-6 fw-bolder gradient_light gradient_text ">
              Token Distribution
            </h2>

            <p className="text-center text_light col-12 col-md-8 mx-auto mb-0 fw-light mb-5">
              At FibSwap we want to be as transparent as possible and give you
              all the information on how we have allocated the original 10
              Billion FIBO tokens.
            </p>
          </div>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="text_light opacity-75 fs-6">
              <h2 className="card_border gradient_text fw-bold d-inline-block">
                Token Stats
              </h2>
              <p className="fs-6">
                Total supply After 500 million Burn: 9,500,000,000 (9.5 billion)
                <br />
                Locked Liquidity: 1,000,000,000 (1 billion)
                <br />
                <br />
                Tokens Locked for 1 year: 2,436,000,000 (2.436 billion)
                <br />
                <br />
                Master Wallet Locked Monthly: 2,390,000,000 (2bil and 390
                million FUTURE BURNING WALLET)
                <br />
                <br />
                Current Circulating Supply: 3,674,000,000 (3.674 billion)
              </p>
            </Col>
            <Col xs={12} md={6} className="ps-md-5 d-flex">
            <PieChart width={250} height={250}>
          
                <Pie
                  activeIndex={activeindex}
                  activeShape={renderActiveShape}
                  data={data01}
                  cx="50%"
                  cy="50%"
                  innerRadius={100}
                  outerRadius={110}
                  fill="transparent"
                  dataKey="value"
                  onMouseEnter={onPieEnter}
                />
              </PieChart>
            </Col>
          </Row>
        </section>

        {/* Contact section  */}
        <section className="py-5 mb-5">
          <div className="my-5 pt-5  ">
            <h2 className="text-center text-white display-6 fw-bolder gradient_light gradient_text ">
              Contact Us
            </h2>

            <p className="text-center text_light col-8 mx-auto mb-0 fw-light mb-5">
              Have questions? We’re happy to help.
            </p>
          </div>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="ps-md-5 d-flex mb-5 mb-md-0">
              <img
                src="/img/contact.svg"
                className="mx-auto me-md-auto"
                width="60%"
                alt=""
              />
            </Col>
            <Col xs={12} md={6} className="text_light fs-6 ps-md-5">
              <h2 className="card_border gradient_text fw-bold d-inline-block">
                Ask Questions
              </h2>
              <p className="fs-6 mb-0">
                You can ask us a question anytime in our various social media
                channels, our admin team, marketing team, developer team and the
                owner regularly hold live voice chat AMAs in our Telegram group.
              </p>
              <div className="d-flex gap-3 mt-5">
              <img src={MailIcon} alt="icon" className="socialIcon" />
              <img src={TelegramIcon} alt="icon" className="socialIcon" />
              <img src={InstaIcon} alt="icon" className="socialIcon" />
              </div>
            </Col>
          </Row>
        </section>

        {/* We are not just blue-black */}
        <section className="py-5 mb-4 mb-md-5">
          <Row xs={1} md={3} className="justify-content-center">
            <Col xs={8} md={3} className="d-flex">
              <img
                src="/img/instacoin.svg"
                width="80%"
                className="mx-auto"
                alt=""
              />
            </Col>
            <Col xs={12} md={6} className="my-4 my-md-0">
              <h2 className="fs-2 display-md-5 fw-bolder text-center text-white pb-4 pb-md-5">
                We are not just{" "}
                <span className="gradient_light gradient_text">blue-black</span>
              </h2>
              <button
                className="bg-transparent position-relative  d-block col-12 col-md-10 fw-bold fs-4 fs-md-3  rainbow_border   rounded mx-auto mt-0 mt-md-5 py-2"
                style={{ boxSizing: "border-box" }}
              >
                <div className="position-absolute top-0  w-full h-full rainbow_color opacity-25 rounded start-0   -z-1"></div>
                <span className="rainbow_color gradient_text">
                  See our projects
                </span>
              </button>
            </Col>
            <Col xs={8} md={3}>
              <img src="/img/poker_app.svg" width="100%" alt="" />
            </Col>
          </Row>
        </section>
      </Container>

      <Footer />
    </div>
  );
}

export default HomeScreen;
