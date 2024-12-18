import './Register.scss'

import Form from '../../components/forms/Form/Form'
import Button from '../../components/buttons/Button/Button'
import Header from '../../components/texts/Header/Header'

export default () => {

    const registerFormData = [
        "Name",
        "E-Mail",
        "Password"
    ]
    
    return(
        <div className="Register">
            <div className="RegisterContents">
                <Header size={75}>
                    Login
                </Header>
                <Form items={registerFormData}/>
                <Button 
                width={300} 
                onClick={() => {}}
                >
                    Register
                </Button>
            </div>
        </div>
    )
}