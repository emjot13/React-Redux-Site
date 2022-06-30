import { Field, Form, Formik, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import * as Yup from 'yup';
import { editCategory } from '../../ducks/categories/operations';
import { getCategories } from '../../ducks/categories/selectors';

const CategoryEdit = ({history, editCategory, categories}) => {
    let id = window.location.pathname.slice(17)
    const category =  categories.find(category => category.id === id)
    
    const handleSubmit = (values) => {
        editCategory(values);
        history.push(`/categories/${id}`)
    }
    const categorySchema = Yup.object().shape({
        name: Yup.string().required(),
        content: Yup.string()
    })
    

    return (
        <div>
            <div id="backdiv">
            <button id="back" onClick={() => history.push(`/categories/${id}`)}>Back</button>
            <h1 id="addHeader">Edit Category</h1>
            </div>

            <Formik
                initialValues={category}
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
                        <button type="submit">Edit</button>
                    </li>
                    </ul>
                </Form>
            </Formik>
        </div>
    )


}

const mapStateToProps = (state) => {
    return {
        categories: getCategories(state)
    };   
}

const mapDispatchToProps = ({
    editCategory
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryEdit));
