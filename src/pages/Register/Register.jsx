import './Register.scss'

import { useState } from 'react'

import Form from '../../components/forms/Form/Form'
import Button from '../../components/buttons/Button/Button'
import Header from '../../components/texts/Header/Header'

export default () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const registerFormData = [
        { placeholder: "Name", key: "name" },
        { placeholder: "E-Mail", key: "email" },
        { placeholder: "Password", key: "password" }
    ]

    const handleInputChange = (key) => (e) => {
        setFormData(prev => ({
            ...prev,
            [key]: e.target.value
        }))
    }

    const handleRegister = () => {
        // TODO: make request
        console.log(formData);
    }
    
    return(
        <div className="Register">
            <div className="RegisterContents">
                <Header size={75}>
                    Login
                </Header>
                <Form items={registerFormData} onChange={ () => handleInputChange }/>
                <Button 
                width={300} 
                onClick={ () => handleRegister }
                >
                    Register
                </Button>
            </div>
        </div>
    )
}