import { useState } from 'react'
import DashboardHod from './hod/DashboardHod'
import Login from './Login'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import UpdateStudent from './hod/UpdateStudent'
import UpdateFaculty from './hod/UpdateProfile'
import UpdateSubject from './hod/UpdateSubject'
import DashboardFaculty from './faculty/DashboardFaculty'
import DashboardStudent from './student/DashboardStudent'
import DashboardPlacement from './placement/DashboardPlacement'
import DashboardAdmin from './admin/DashboardAdmin'
import ErrorPage from './ErrorPage'
import ErrorBoundary from './ErrorBoundary'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
 
 <div>

<BrowserRouter>
<Routes>
<Route path='/' element={<Login/>}/>
<Route path='/admin' element={<DashboardAdmin/>}/>

<Route path='/hod' element={<DashboardHod/>}/>
<Route path='/updateStudent' element={<UpdateStudent/>}/>
<Route path='/updateFaculty' element={<UpdateFaculty/>}/>
<Route path='/updateSubject' element={<UpdateSubject/>}/>
<Route path='/faculty' element={<DashboardFaculty/>}/>
<Route path='/student' element={<DashboardStudent/>}/>
<Route path='/placement' element={<DashboardPlacement/>} />
<Route path="*" element={<ErrorPage />} />
</Routes>
</BrowserRouter>
 <ToastContainer/>
 </div>
  )
}

export default () => <ErrorBoundary><App /></ErrorBoundary> ;
