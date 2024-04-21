import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Portal from './Portal'
import SearchCourse from './SearchCourse'

const Layout = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/portal" element={<Portal/>}/>
        <Route path="/searchcourse" element={<SearchCourse/>}/>
    </Routes>
  )
}

export default Layout