import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="page">
        <div className="title">
          <h1>Título</h1>
        </div>
        <div className="subtitle">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, turpis et vestibulum lobortis, velit elit tempor ex, vel auctor nisi turpis vitae dui. Praesent ac magna ex. Curabitur tincidunt, magna eget gravida fringilla, metus ex placerat augue, ut consectetur odio quam id leo. Maecenas feugiat non dui id vulputate. Aenean vitae pharetra sapien, a rutrum magna. Vestibulum viverra aliquam quam, ut facilisis magna mollis non. Phasellus vitae orci nunc.</p>
        </div>
        <div className="img">
          <img src="/imgs/img.webp" alt="img" />
          </div>
      </div>
    </>
  )
}

export default App
