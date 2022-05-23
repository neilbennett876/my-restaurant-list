import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import Menubar from './components/Menubar';
import { Layout, } from 'antd'
import RestaurantPage from './components/RestaurantPage';
import Login from './components/Login';
import './App.css';

const  { Header, Content } = Layout

export const UserContext = createContext(null) //default is usually null

function App() {
  const [user, setUser] = useState()
  return (
      <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
      <Layout className='layout'>
      <Header>
        <Menubar/>
      </Header>
      <Content>
        <Routes>
          <Route path='/restaurants/:restaurantsID' element={<RestaurantPage/>} />
          <Route path='/random' element={<h1>Random</h1>}/>
          <Route path='/add' element={!user ? <Login setUser={setUser}/> : <h1>Add Restaurant</h1>}/>
          <Route path='/' element={<RestaurantList />}/>
        </Routes>
      </Content>
      </Layout>
      </UserContext.Provider>
      </BrowserRouter>
  );
}

export default App;
