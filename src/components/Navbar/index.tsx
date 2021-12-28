import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface Props {
  isexpand: boolean
}
const NavigationBar = () => {
  const [isexpand, setIsexpand] = React.useState(false)
  return (
    <Box>
      <Mobile>
        <img src="img/logo.png" className="logo" alt="" />
        <button type="button" onClick={() => setIsexpand(!isexpand)}>
          <img
            className="ham"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAVElEQVRoge3WwQ2AUAhEQb6xcK0ci5AEQmYq2L29CAAanMx8ukdUOJmZ3SMqXN0DqjgyzR0Rb/cIAKCIjJ9mTTQ6Mo2MB4BNZPw0a6LRkWlkPAB/fId1GBOc3m2dAAAAAElFTkSuQmCC"
            alt=""
          />
        </button>
      </Mobile>
      <Desktop isexpand={isexpand}>
        <div className="left">
          <img src="img/logo.png" className="logo" alt="" />
        </div>
        <div className="center">
          <div className="anchor">
              <a href="">Products</a>
              <a href="">Companies</a>
              <a href="">Resources</a>
              <a href="">Contact</a>
          </div>
        </div>
        <div className="right">
          <button className="connectbtn" type="button">
                <div className="gradtext">Get The App</div>
            </button>
        </div>
      </Desktop>
    </Box>
  )
}

const Mobile = styled.div`
  display: none;
  width: 100%;
  button {
    background: transparent;
    border: 0;
    outline: 0;
    box-shadow: none;
  }
  .ham {
    height: 28px;
    cursor: pointer;
  }
  @media screen and (max-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const Desktop = styled.div<Props>`
  // transition:all 0.4s linear;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    height: ${(p) => (p.isexpand ? '100%' : '0')};
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: none;
    }
  }
`
const Box = styled.div`
  padding: 20px 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff;

  position: relative;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
  .left {
    display: flex;
    align-items: center;
    @media screen and (max-width: 992px) {
      flex-direction: column;
    }
    img {
      height: 40px;
      width: auto;
      margin-right: 30px;
    }
  }
  .center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    a{
      color:#fff;
      text-decoration:none;
    }
    @media screen and (max-width: 992px) {
      position: static;
      transform: translate(0);
    }
  }
  .right {
    display: flex;
    align-items: center;
  
    @media screen and (max-width: 992px) {
      flex-direction: column;
      margin-bottom: 20px;
    }
    .outline {
      background: transparent;
      color: #fff;
      outline: 0;
      border: 1px solid #fff;
      padding: 7px 28px;
      border-radius: 6px;
      margin-left: 10px;
      @media screen and (max-width: 992px) {
        margin-left: 0px;
        margin-top: 14px;
      }
    }
  }
  .connectbtn{
    background: linear-gradient(45deg, rgba(55, 150, 229, 0.1) 0%, rgba(70, 236, 227, 0.1) 100%);
    border-radius: 8px;
    padding: 10px 24px;
    border:0;
    cursor:pointer;
    .gradtext{
        background: linear-gradient(to right, #3796E5 0%, #46ECE3 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight:700
    }
   
  }
  .anchor {
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 992px) {
      flex-direction: column;
      a {
        padding: 14px 10px;
        display: block;
      }
    }
    a {
      margin: 0 10px;
      font-size: 14px;
      color:#fff;
      text-decoration:none;
    }
  }
`
export default NavigationBar
