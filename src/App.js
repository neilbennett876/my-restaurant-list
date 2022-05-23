import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import Menubar from './components/Menubar';
import { Layout, } from 'antd'
import RestaurantPage from './components/RestaurantPage';
import Login from './components/Login';
import './App.css';


const  { Header, Content } = Layout

function App() {
  return (
      <BrowserRouter>
      <Layout className='layout'>
      <Header>
        <Menubar />
      </Header>
      <Content>
        <Routes>
          <Route path='/restaurants/:restaurantsID' element={<RestaurantPage/>} />
          <Route path='/random' element={<h1>Random</h1>}/>
          <Route path='/add' element={<h1>Add Restaurant</h1>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<RestaurantList />}/>
        </Routes>
      </Content>
      </Layout>
      </BrowserRouter>
  );
}

export default App;
