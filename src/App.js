import "./App.css";
import SearchBar from "./component/SearchBar";
import "antd/dist/antd.css";
import { Layout } from "antd";
const { Content } = Layout;
// import NavBar from "./component/NavBar/Navbar";

function App() {
  const searchStyle = { padding: "0", marginTop: 70, marginBottom: 30 };
  return (
    <div className="App">
      <Layout style={{ padding: "10px" }}>
        <Content className="site-layout" style={searchStyle}>
          <SearchBar />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
