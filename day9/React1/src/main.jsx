import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Marks from './marks.jsx'
import Profile from './profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Profile n1={"Aman"} n2={20} n3={"ghaziabad"}/>
    <Marks m1={98} m2={32}  m3={45} m4={56} m5={56} m6={76}/>
    <Profile n1={"Tiwari"} n2={21} n3={"Chipiyana"}/>
    <Marks m1={89} m2={45}  m3={78} m4={65} m5={51} m6={54}/>
  </StrictMode>,
)