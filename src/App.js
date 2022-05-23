import './App.css';
import RestaurantList from './components/RestaurantList';
import Menubar from './components/Menubar';
import { Layout, } from 'antd'


const  { Header, Content } = Layout

function App() {
  return (
    <Layout className='layout'>
      <Header>
      <Menubar />
      </Header>
      <Content>
        <RestaurantList />
      </Content>
    </Layout>
  );
}

export default App;
