import { useState } from 'react'

import './App.css'
import Student from './Student'
import Navbar from './Navbar'
import image from "./../public/download.jpeg"
import StudentState from './StudentState'
import UseOfState from './UseOfState'
import ImageManipulation from './ImageManipulation'


function App() {

  const data={
    name: 'Ayush Singh',
    dob: '26/09/2004',
    roll_no: '2200320100048',
    course: 'Computer science and Engineering',
    image: image,
  }

  return (
    <>
      {/* <Navbar />
      <div className='component'>

        <Student data={data}/>
        <Student data={data}/>
        <Student data={data}/>
        <Student data={data}/>
        {/* <Student
          image={image}
          name={"Ayush singh"}
          dob={"26/09/2004"}
          roll_no={"2200320100048"}
          course={"Computer science and Engineering"}
        />

      
      </div>
      */}
      {/* <StudentState/>  */}

        {/* <UseOfState/> */}
        <ImageManipulation/>

    </>
  )

}
Student.defaultProps = {
  college: 'ABES Engineering University'
}

export default App
