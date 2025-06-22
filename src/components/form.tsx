import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from 'yup'

const validationSchema = Yup.object({
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  phoneno: Yup.number().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  message: Yup.string().min(15, 'Must be at least 15 characters').required('Required'),
});
const initialValues = {
  firstname: '',
  lastname: '',
  phoneno: '',
  email: '', 
  message: '' ,
};
const onSubmit = (values: any) => {
  console.log('submitted', values)
}

const FormComp = (): any => {
    return (
        <div>
            <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
                <Form>
                    <div className={`flex gap-5 pt-3`}>
                    <div className={`flex-1/2 flex flex-col`}>
                        <label htmlFor="firstname" className={`text-red-700`}>FirstName</label>
                        <Field className={`relative z-10 border-2 border-red-700 p-1 rounded-sm`} type='text' id='firstname' name='firstname' />
                        <ErrorMessage name="firstname" >
                        {errorMsg => <div className="text-red-500 text-xs">{errorMsg}</div> }
                        </ErrorMessage>
                    </div>
                    <div className={`flex-1/2 flex flex-col`}>
                        <label htmlFor="lastname" className={`text-red-700`}>LastName</label>
                        <Field className={`relative z-10 border-2 border-red-700 p-1 rounded-sm`} type='text' id='lastname' name='lastname' />
                        <ErrorMessage name="lastname" >
                        {errorMsg => <div className="text-red-500 text-xs">{errorMsg}</div> }
                        </ErrorMessage>
                    </div>
                    </div>
                    <div className={`flex gap-5 pt-3`}>
                    <div className={`flex-1/2 flex flex-col`}>
                        <label htmlFor="email" className={`text-red-700`}>Email</label>
                        <Field className={`relative z-10 border-2 border-red-700 p-1 rounded-sm`} type='text' id='email' name='email' />
                        <ErrorMessage name="email" >
                        {errorMsg => <div className="text-red-500 text-xs">{errorMsg}</div> }
                        </ErrorMessage>
                    </div>
                    <div className={`flex-1/2 flex flex-col`}>
                        <label htmlFor="phoneno" className={`text-red-700`}>Phone no.</label>
                        <Field className={`relative z-10 border-2 border-red-700 p-1 rounded-sm`} type='text' id='phoneno' name='phoneno' />
                        <ErrorMessage name="phoneno">
                        {errorMsg => <div className="text-red-500 text-xs">{errorMsg}</div> }
                        </ErrorMessage>
                    </div>
                    </div>
                    <div className={`flex-1/2 flex flex-col`}>
                    <label htmlFor="meassage" className={`text-red-700`}>Message</label>
                    <Field className={`relative z-10 border-2 border-red-700 p-1 rounded-sm text-white`} as='textarea' rows='4' id='message' name='message' />
                    <ErrorMessage name="message" >
                        {errorMsg => <div className="text-red-500 text-xs">{errorMsg}</div> }
                    </ErrorMessage>
                    </div>
                    <button className="mt-5 relative z-10 bg-red-600 border-2 border-gray-400 rounded-md px-7 py-1 font-bold text-md">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
export default FormComp;