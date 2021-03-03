import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AppNavbar from '../components/AppNavbar'
import { Container } from 'reactstrap'
import { Redirect, Route, Switch } from 'react-router-dom'
import PostCardlist from './normalRoute/PostCardlist'
import PostWrite from './normalRoute/PostWrite'
import PostDetail from './normalRoute/PostDetail'
import Search from './normalRoute/Search'
import CategoryResult from './normalRoute/CategoryResult'

const MyRouter = () => {
  return (
    <div>
      <AppNavbar />
      <Header />
      <Container id="main-body">
        <Switch>
          <Route path="/" exact component={PostCardlist}/>
          <Route path="/post" exact component={PostWrite}/>
          <Route path="/post/:id" exact component={PostDetail}/>
          <Route path="/post/category/:categoryName" exact component={CategoryResult}/>
          <Route path="/search/:searchTerm" exact component={Search}/>
          <Redirect from="*" to="/"/>
        </Switch>
      </Container>
      <Footer />
    </div>
  )
}

export default MyRouter;
