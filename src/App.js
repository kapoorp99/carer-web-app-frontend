import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import { AppContainer } from './AppStyles'
import Home from './components/Content/Home/Home'
import Posts from './components/Content/Posts/Posts'
import AddPost from './components/Forms/Create/AddPost'
import SearchPost from './components/Forms/Search/SearchPost'
import Profile from "./components/Profile/Profile";

function App() {
  return (

    <AppContainer>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/create_post' element={<AddPost />} />
          <Route path='/search_post' element={<SearchPost />} />
        </Routes>
      </Router>
    </AppContainer>
  )
}

export default App;
