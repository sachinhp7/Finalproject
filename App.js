
import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** import components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { CheckUserExist } from '../helper/helper';
import Home from './Home';
import WelcomePage from './WelcomePage';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import ResultTable from './ResultTable'
import SignUp from './SignUp'




/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>
  },



  {
   path : '/welcomepage',
    element : <WelcomePage></WelcomePage>
  },

    {
   path : '/loginpage',
    element : <LoginPage></LoginPage>
  },

    {
   path : '/dashboard',
    element : <Dashboard></Dashboard>
  },


    {
    path : '/signup',
    element : <SignUp></SignUp>
  },

      {
   path : '/main',
    element : <Main></Main>
  },




  {
    path : '/quiz',
    element : <CheckUserExist><Quiz /></CheckUserExist> 
  },
  {
    path : '/result',
    element : <CheckUserExist><Result /></CheckUserExist>
  },



        {
   path : '/resulttable',
    element : <ResultTable></ResultTable>
  },

])



function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
