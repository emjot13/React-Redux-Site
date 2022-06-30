import { Field, Form, Formik, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import * as Yup from 'yup';
import { addCategory } from '../../ducks/categories/operations';

const CategoryAdd = ({history, addCategory}) => {
    
    const handleSubmit = (values) => {
        addCategory(values);
        history.push('/categories')
    }
    const categorySchema = Yup.object().shape({
        name: Yup.string().required(),
        content: Yup.string()
    })
    

    return (
        <div>
            <h1 id="addHeader">Add Category</h1>
            <Formik
                initialValues={{
                    name: "",
                    content: "",
                    coins: []
                }}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}
                validationSchema={categorySchema}>
                <Form>
                    <ul>
                        <li>
                            <label htmlFor="name">Name: </label>  
                            <Field name="name" type="text" id="name"/>  
                            <ErrorMessage name="name" className="red" component="div"/> 
                        </li>
                        <li>
                            <label htmlFor="content">Content: </label>  
                            <Field name="content" type="text" id="content"/>  
                            <ErrorMessage name="content" className="red" component="div"/> 
                        </li>
                    <li>
                        <button type="submit">Add</button>
                    </li>
                    </ul>
                </Form>
            </Formik>
        </div>
    )


}

const mapStateToProps = (state) => {
    return {};   
}

const mapDispatchToProps = ({
    addCategory
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryAdd));
