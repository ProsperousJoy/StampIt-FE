import './Register.scss'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Form from '../../components/forms/Form/Form'
import Button from '../../components/buttons/Button/Button'
import Header from '../../components/texts/Header/Header'
import Paragraph from '../../components/texts/Paragraph/Paragraph.jsx'

import { register } from '../../helpers/api.js'

export default () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const [isSubmitting, setIsSubmitting] = useState(false)

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

    const handleRegister = async () => {
        setIsSubmitting(true)
        try {
            const response = await register(formData.email, formData.password, formData.name)
            console.log('Registration successful:', response)
            navigate('/login')
        } catch (error) {
            console.error('Registration error:', error)
            if (error.response.data.message === 'User already exists') {
                alert('User already exists. Please try a different email.')
            }
        }finally{
            setIsSubmitting(false)
        }
    }
    
    return(
        <div className="Register">
            <div className="RegisterContents">
                <Header size={75}>
                    Register
                </Header>
                <Form items={registerFormData} onChange={ handleInputChange }/>
                <Button 
                width={300} 
                onClick={ handleRegister }
                disabled={ isSubmitting }
                >
                    {isSubmitting ? 'Submitting...' : 'Register'}
                </Button>
                <Paragraph onClick={() => navigate('/login')}>
                    Already have an account? click here
                </Paragraph>
            </div>
        </div>
    )
}