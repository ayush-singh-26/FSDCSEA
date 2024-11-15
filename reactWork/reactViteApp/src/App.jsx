import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './Student'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Student
        name={"Ayush singh"}
        dob={"26/09/2004"}
        roll_no={"2200320100048"}
        course={"Computer science and Engineering"} />
    </>
  )
}

export default App
