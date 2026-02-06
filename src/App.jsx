import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card'
import Buttons from './Components/Buttons'

const App = () => {

  const [userData, setUserData] = useState([])

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=18`)
    setUserData(response.data)
  }

  const [index, setindex] = useState(1)

  useEffect(function () {
    getdata()
  }, [index])

  let printUserName = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>No User Available</h3>

  if (userData.length > 0) {
    printUserName = userData.map((elem, idx) => {
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }

  return (

    <div className='bg-black overflow-auto h-screen text-white'>
      <div className='flex flex-wrap gap-5 p-6 h-[91%] justify-center'>
        {printUserName}
      </div>

      <div>
        <Buttons index={index} setindex={setindex} setUserData={setUserData}/>
      </div>

    </div>
  )
}

export default App