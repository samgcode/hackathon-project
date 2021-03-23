import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home/HomePage';
import Tweets from '@/components/Tweets/EmbededTweets';
import Graph from '@/components/Graphs/GraphPage';
import Store from '@/components/Store/StorePage';
import Login from '@/components/Login/LoginRedirect';
import Signup from '@/components/Login/SignUp';
import AddData from '@/components/AddData/AddData';
import OthersLogin from '@/components/Login/OthersLogin';
import HospitalLogin from '@/components/Login/HospitalLogin';
import Volunteering from '@/components/Volunteer/VolunteeringPage';
import Driving from '@/components/Volunteer/DrivingVolunteer';
import MapPage from '@/components/Map/MapPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/tweets',
      name: 'Tweets',
      component: Tweets
    }, {
      path: '/graph',
      name: 'Graphs',
      component: Graph
    }, {
      path: '/store',
      name: 'Store',
      component: Store
    }, {
      path: '/otherLogin',
      name: 'OthersLogin',
      component: OthersLogin
    }, {
      path: '/hospitalLogin',
      name: 'HospitalLogin',
      component: HospitalLogin
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/signup', 
      name: 'Signup',
      component: Signup
    }, {
      path: '/volunteer',
      name: 'Volunteer',
      component: Volunteering
    }, {
      path: '/drivingVolunteer',
      name: 'DrivingVolunteer',
      component: Driving
    }, {
      path: '/addData',
      name: 'AddData',
      component: AddData
    }, {
      path: '/map',
      name: 'Map',
      component: MapPage
    },
  ]
});
