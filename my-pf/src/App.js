import React from "react";
//import logo from './logo.svg';
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
//import Home from "./components/Home";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                MyPortfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Home"
              >
                About me
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Work"
              >
                Work{" "}
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="education"
              >
                Education
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/contact"
              >
                Contact/Share Feedback
              </Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                MyPortfolio
              </Link>
            }
          >
            <Navigation>
              <Link to="/Home">About me</Link>
              <Link to="/Work">Work </Link>
              <Link to="/contact">Contact</Link>
              <Link to="education">Education</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
