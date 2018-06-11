import React, { Component } from "react";
import AnimatedWrapper from "./AnimatedWrapper";
class HomeComponent extends Component {
 render() {
  return (
   <div className="page">
    <h1>Home</h1>
    <p>Hello from the home page!</p>
    <image src="http://img.zcool.cn/community/0381de85949053ca8012193a3339cc5.jpg"/>
   </div>
  )
 }
}
const Home = AnimatedWrapper(HomeComponent);
export default Home;