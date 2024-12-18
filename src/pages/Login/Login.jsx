import './Login.scss'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Form from '../../components/forms/Form/Form'
import Button from '../../components/buttons/Button/Button'
import Header from '../../components/texts/Header/Header'
import Paragraph from '../../components/texts/Paragraph/Paragraph.jsx'

import { login } from '../../helpers/api.js'

export default () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const [isSubmitting, setIsSubmitting] = useState(false)

    const loginFormData = [
        { placeholder: "E-Mail", key: "email" },
        { placeholder: "Password", key: "password" }
    ]

    const handleInputChange = (key) => (e) => {
        setFormData(prev => ({
            ...prev,
            [key]: e.target.value
        }))
    }

    const handleLogin = async () => {
        setIsSubmitting(true)
        try {
            const response = await login(formData.email, formData.password)
            console.log('Login successful:', response)
            localStorage.setItem('authToken', response.token)
            navigate('/dashboard')
        } catch (error) {
            console.error('Login error:', error)
            if (error.response?.data?.message === 'Invalid credentials') {
                alert('Invalid email or password. Please try again.')
            }
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="Login">
            <div className="LoginContents">
                <Header size={75}>
                    Login
                </Header>
                <Form items={loginFormData} onChange={handleInputChange} />
                <Button 
                    width={300} 
                    onClick={handleLogin}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Logging in...' : 'Login'}
                </Button>
                <Paragraph onClick={() => navigate('/register')}>
                    No account? click here
                </Paragraph>
            </div>
        </div>
    )
}
