import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import RemImage from './images/Rem_.webp';
import YotsugiImage from './images/Yotsugi_.webp'
import AsukaImg from './images/Asuka_.webp'
import MitsuriImg from './images/Mitsuri2_.webp'
import ShinobuImg from './images/Shinobu_.webp'
import SaberImg from './images/Saber_.webp'


import {IconContext} from "react-icons"
import {MdMenu} from "react-icons/md/";


  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
    componentWillUnmount() {
    clearInterval(this.timerID);
    }

    tick() {
    this.setState({
        date: new Date()
    });
    }

    render() {
      return (
        <span className = "Clock">{this.state.date.toLocaleTimeString()}</span>
      );
    }
  }

  class Waifu extends React.Component {
      render() {
          return (
            <div className = {this.props.className}>
                <WaifuText name = {this.props.name}>{this.props.children}</WaifuText>
                <WaifuImage src = {this.props.Imgsrc} alt = {this.props.alt} />
            </div>
          );
      }
  }

  class WaifuText extends React.Component {
        render() {
            return (
              <p className = "WaifuText">{this.props.name}. {this.props.children}</p>
            );
        }
  }
  class WaifuImage extends React.Component {
      render() {
        return (
          <img src = {this.props.src} alt = {this.props.alt} className = "WaifuImage"/>
        );
      }
  }
 
  class NavBar extends React.Component {          
    render() {
      return (
        <nav className = "Navbar">     
          <button onClick = {() => this.props.menutoggle()}>
            <IconContext.Provider value={{className: "icons" }}>
              <MdMenu/>
            </IconContext.Provider>
          </button>         
          <Clock/>
        </nav>
      );
    }
  }
  class SideMenu extends React.Component {   
    render() {
      return (
        <div className = {this.props.className}>
          <ul>
            <li><a href = "">One</a></li>
            <li><a href = "">Two</a></li>
            <li><a href = "">Three</a></li>
          </ul>
        </div>
      );
    }
  }

  class MainContent extends React.Component {
    render() {
        return (
            <div className = "MainContent">
                <p className ="hold">Bakaretsu Bakaretsu La La La. Bakaretsu Bakaretsu La La La. Bakaretsu Bakaretsu La La La. Bakaretsu Bakaretsu La La La. </p>
                <Waifu
                  className = "Waifu First"
                  name = "Rem" 
                  Imgsrc = {RemImage} 
                  alt = "Best Girl Rem"
                >
                    Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. Best Girl. 
                </Waifu>
                <Waifu
                  className = "Waifu"
                  name = "Artoria Pendragon"
                  Imgsrc = {SaberImg}
                  alt = "Artoria Pendragon"
                >
                    Excalibur.
                </Waifu>
                <Waifu
                  className = "Waifu"
                  name = "Ononoki Yotsugi"
                  Imgsrc = {YotsugiImage}
                  alt = "Ononoki Yotsugi"
                >
                    Is a doll.
                </Waifu>
                <Waifu
                  className = "Waifu"
                  name = "Asuka Soryu Langley"
                  Imgsrc = {AsukaImg}
                  alt = "Asuka Soryu Langley"
                >
                    Pathetic.
                </Waifu>
                <Waifu
                  className = "Waifu"
                  name = "Shinobu"
                  Imgsrc = {ShinobuImg}
                  alt = "Shinobu"
                >
                    Ara Ara Sayonara.
                </Waifu>
                <Waifu
                  className = "Waifu"
                  name = "Kanroji Mitsuri"
                  Imgsrc = {MitsuriImg}
                  alt = "Kanroji Mitsuri"
                >
                    Butterfly.
                </Waifu>
                <p className ="hold">Bakaretsu Bakaretsu La La La. Bakaretsu Bakaretsu La La La. Bakaretsu Bakaretsu La La La. Bakaretsu Bakaretsu La La La. </p>
            </div>
        );
    }
  }

  class Wrapper extends React.Component {  
    constructor(props) {
      super(props);
      this.state = {
          SideMenuActive: false,
      };
    }
    ToggleMenuShift = () => {
      this.setState({SideMenuActive: !this.state.SideMenuActive});
      console.log("Switched to " + this.state.SideMenuActive);
    } 
      render() {
          return (
              <div className = "Wrapper">
                <NavBar menutoggle = {this.ToggleMenuShift}/>
                <SideMenu className = {this.state.SideMenuActive ? "SideMenu ShiftedRight" : "SideMenu"}/>             
                <MainContent/>
                <footer className = "Footer">Footer</footer>
              </div>
          );
      }
  }

  ReactDOM.render(
    <Wrapper/>,
    document.getElementById('root')
  );
