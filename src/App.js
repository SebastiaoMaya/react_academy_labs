import React, { useState } from "react";
import "./App.css";
import Tab from "./components/tabs/Tab";
import Tabs from "./components/tabs/Tabs";

const App = () => {
  const [tab, setTab] = useState("home");

  return (
    // <UserManager>
    //   <div className="App-body">
    //     <Header />
    //     <Footer />
    //     <LoginForm />
    //   </div>
    // </UserManager>
    // <div className="App-body">
    //   <Select>
    //     <Option value="blue">Blue</Option>
    //     <Option value="red">Red</Option>
    //     <Option value="white">White</Option>
    //   </Select>
    // </div>
    <div className="App-body">
      <Tabs value={tab} onChange={setTab} initialValue="home">
        <Tab value="home"> Home </Tab>
        <Tab value="about"> About </Tab>
        <Tab value="gallery"> Gallery </Tab>
      </Tabs>
      <button style={{ background: "white" }} onClick={() => setTab("gallery")}>
        go to gallery
      </button>
    </div>
  );
};

export default App;
