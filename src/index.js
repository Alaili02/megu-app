import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RemImage from './images/Rem.png';
import YotsugiImage from './images/Yotsugi.jpg'


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
        <h2 className = "Clock">{this.state.date.toLocaleTimeString()}</h2>
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
 
  class MainContent extends React.Component {
    render() {
        return (
            <div className = "MainContent">
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
                  name = "Ononoki Yotsugi"
                  Imgsrc = {YotsugiImage}
                  alt = "Ononoki Yotsugi"
                >
                    Is a doll.
                </Waifu>
            </div>
        );
    }
  }

  class NavBar extends React.Component {
    render() {
      return (
        <nav className = "Navbar">
          <a href = "https://www.google.com"><img src = {RemImage} height = "100%" alt = "RemIcon"></img></a>
          <a href = "https://www.google.com">Two</a>
          <a href = "https://www.google.com">Three</a>
          <Clock/>
        </nav>
      );
    }
  }

  class Wrapper extends React.Component {
      render() {
          return (
              <div>
                <NavBar/>
                <MainContent></MainContent>
              </div>
          );
      }
  }

  ReactDOM.render(
    <Wrapper/>,
    document.getElementById('root')
  );
