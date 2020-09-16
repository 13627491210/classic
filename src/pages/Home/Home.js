import React from "react";
import "./Home.less";
import Search from "antd/lib/input/Search";
import { FireFilled } from "@ant-design/icons";
import { Tabs } from "antd";

const { TabPane } = Tabs;
class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <header>
          <div className="home-slogan">
            <FireFilled className="home-slogan-logo" />
            <span className="home-slogan-h">
              <h1>经典榜单</h1>
              <h5>被人铭记的，都是经典。</h5>
            </span>
          </div>
          <Search className="home-search" placeholder="所搜，即所得"></Search>
          <div className="home-weather">
            <span>晚上好，新吴区现在 ☁️多云 20°</span>
            <img />
          </div>
        </header>
        <div className="home-menu">
          <Tabs defaultActiveKey="1" className="home-menu-tabs">
            <TabPane tab="首页" key="1"></TabPane>
            <TabPane tab="书籍" key="2"></TabPane>
            <TabPane tab="电影" key="3"></TabPane>
            <TabPane tab="音乐" key="4"></TabPane>
            <TabPane tab="游戏" key="5"></TabPane>
            <TabPane tab="科技" key="6"></TabPane>
            <TabPane tab="网站" key="7"></TabPane>
            <TabPane tab="名言" key="8"></TabPane>
            <TabPane tab="战争" key="9"></TabPane>
          </Tabs>
          ,
        </div>
        <div className="home-content"></div>
      </div>
    );
  }
}
export default Home;
