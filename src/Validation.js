import * as Yup from 'yup';

const ValidateLogin = Yup.object().shape({
    username: Yup.string()
            .required('Fill your username')
            .min(6, 'Minium characters is 6')
            .max(12, 'Maximum characters is 12')
            .matches(/(^[a-zA-Z ]+$)/, 'username doesnot contain number or special char'),
    password: Yup.string()
            .required('Fill your password')
            .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            'password must be at least 8 chars with at least a symbol, upper and lower case letters and a number'),
    
});

const ValidateSignUp = Yup.object().shape({
        name: Yup.string()
                .required('Fill your name')
                .matches(/(^[a-zA-Z ]{6,12}$)/, 'name must be from 6 to 12 letter characters'),
        email: Yup.string()
                .required('Fill your email')
                .matches(/\S+@\S+\.\S+/, 'Email is not valid'),
        phoneNumber: Yup.string()
                .required('Fill your phoneNumber')
                .matches(/((09|01[2|6|8|9])+([0-9]{8})\b)/, 'phoneNumber is not valid'),
        birthday: Yup.date()
                .required('Fill your date of birth') 
                .test('age', 'Age must be greater than 5 years old', 
                    birthday => {
                        const moment = new Date();
                        moment.setFullYear(moment.getFullYear() - 5);
                        return birthday <= moment;
                    }
                ),
        gender: Yup.string().required('Fill your gender')
    });
   
    
export  {ValidateLogin, ValidateSignUp};