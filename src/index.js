import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SampleImage from './images/Sample_Image.webp';

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

  class Object extends React.Component {
      render() {
          return (
            <div className = {this.props.className}>
                <ObjectText name = {this.props.name}>{this.props.children}</ObjectText>
                <ObjectImage src = {this.props.Imgsrc} alt = {this.props.alt} />
            </div>
          );
      }
  }

  class ObjectText extends React.Component {
        render() {
            return (
              <p className = "ObjectText">{this.props.name}. {this.props.children}</p>
            );
        }
  }
  class ObjectImage extends React.Component {
      render() {
        return (
          <img src = {this.props.src} alt = {this.props.alt} className = "ObjectImage"/>
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
                <p className ="hold">Introductory Paragraph here</p>
                <Object
                  className = "Object First"
                  name = "Name Placeholder" 
                  Imgsrc = {SampleImage} 
                  alt = "Sample Image"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum risus in justo placerat, vel vulputate urna vestibulum. Sed eu suscipit mauris. 
                </Object>
                <Object
                  className = "Object"
                  name = "Name Placeholder"
                  Imgsrc = {SampleImage}
                  alt = "Sample Image"
                >
                    Vestibulum in tellus venenatis, gravida leo non, fringilla purus. Nunc volutpat enim sed nunc fermentum porta. Cras dapibus bibendum dui, id viverra dolor aliquet et.
                </Object>
                <Object
                  className = "Object"
                  name = "Name Placeholder"
                  Imgsrc = {SampleImage}
                  alt = "Sample Image"
                >
                    Integer ullamcorper eleifend justo, non commodo lectus semper pharetra. Sed vulputate rhoncus egestas. Donec purus risus, euismod rhoncus viverra tincidunt, porta ut magna.
                </Object>
                <Object
                  className = "Object"
                  name = "Name Placeholder"
                  Imgsrc = {SampleImage}
                  alt = "Sample Image"
                >
                    Sed ornare a leo scelerisque pulvinar. Mauris pharetra vel nunc et tincidunt. Aliquam sed mi ut nunc bibendum pretium. Nunc id semper nunc.
                </Object>
                <Object
                  className = "Object"
                  name = "Name Placeholder"
                  Imgsrc = {SampleImage}
                  alt = "Sample Image"
                >
                    Fusce bibendum neque quis elit euismod, ut molestie velit eleifend. Curabitur scelerisque magna turpis, consectetur pretium lectus tristique sed. 
                </Object>
                <Object
                  className = "Object"
                  name = "Name Placeholder"
                  Imgsrc = {SampleImage}
                  alt = "Sample Image"
                >
                     Nulla elit ipsum, egestas eget mauris scelerisque, aliquam vulputate justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                </Object>
                <p className ="hold">Conclusion Paragraph </p>
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
