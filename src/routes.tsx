import { createBrowserRouter } from 'react-router-dom'

import { PrivateRoute } from './components/private-route'
import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { AdoptPage } from './pages/app/adopt/adopt'
import { RegisterPet } from './pages/app/adopt/pet/register-pet'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Donate } from './pages/app/donate/donate'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute Component={AppLayout} />,
    children: [
      { path: '/', element: <PrivateRoute Component={Dashboard} /> },
      { path: 'adopt', element: <PrivateRoute Component={AdoptPage} /> },
      {
        path: 'adopt/register',
        element: <PrivateRoute Component={RegisterPet} />,
      },
      { path: 'donate', element: <PrivateRoute Component={Donate} /> },
      { path: 'rescue', element: <h1>Rescue</h1> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: 'sign-in', element: <SignIn /> },
      { path: 'sign-up', element: <SignUp /> },
    ],
  },
])
