import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageUpload from './components/ImageUpload'
import axios from 'axios'
import { useEffect } from 'react'
import Loading from './components/Loading'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <ImageUpload/>
      <div>
        {false ? <Loading/> : <Content/>}
      </div>
    </>
  )
}

export default App
