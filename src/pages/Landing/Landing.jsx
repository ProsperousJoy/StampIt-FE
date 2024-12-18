import './Landing.scss'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../../components/texts/Header/Header'
import Paragraph from '../../components/texts/Paragraph/Paragraph'
import Button from '../../components/buttons/Button/Button'

export default () => {
  const [clicked, setClicked] = useState(false)
  const navigate = useNavigate()

  const labelData = {
    "initialP" : "A low pressure task management website",
    "finalP" : "Add 3 tasks everyday and get rewarded when you complete them",
    "initialB" : "Click to continue",
    "finalB" : "Click to begin"
  }

  const handleClick = () => {
    if (!clicked) {
      setClicked(true)
    } else {
        navigate('/register')
      }
    }


  return (
    <div className="Landing">
      <div className="Texts">
        <Header size={100}>
          StampIt
        </Header>
        <Paragraph size={50}>
          {clicked ? labelData.finalP : labelData.initialP}
        </Paragraph>
      </div>
      <Button 
        width={300} 
        onClick={() => {handleClick()}}
      >
        {clicked ? labelData.finalB : labelData.initialB}
      </Button>
    </div>
  )
}
