import { Field, Form, Formik, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import * as Yup from 'yup';
import { editExchange } from '../../ducks/exchanges/operations';
import { getExchanges } from "../../ducks/exchanges/selectors";

const ExchangeEdit = ({exchanges, history, editExchange}, props) => {
    let id = window.location.pathname.slice(16)
    const exchange =  exchanges.find(exchange => exchange.id === id)
    
    const handleSubmit = (values) => {
        editExchange(values);
        history.push(`/exchanges/${id}`)
    }
    const exchangeSchema = Yup.object().shape({
        name: Yup.string().required(),
        year_established: Yup.string(),
        country: Yup.string().required(),
        trust_score: Yup.number().positive().max(10),
        trust_score_rank: Yup.number().positive().max(100),
        description: Yup.string(),
        trade_volume_24h_btc: Yup.number().positive().required(),
        image: Yup.string().url()
    })
    

    return (
        <div>
            <div id="backdiv">
            <button id="back" onClick={() => history.push(`/exchanges/${id}`)}>Back</button>
            <h1 id="addHeader">Edit Exchange</h1>
            </div>
            <Formik
                initialValues={exchange}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}
                validationSchema={exchangeSchema}>
                <Form>
                    <ul>
                        <li>
                            <label htmlFor="name">Name: </label>  
                            <Field name="name" type="text" id="name"/>  
                            <ErrorMessage name="name" className="red" component="div"/> 
                        </li>
                        <li>
                            <label htmlFor="year_established">Year established: </label>  
                            <Field name="year_established" type="number" id="year_established"/>  
                            <ErrorMessage name="year_established" className="red" component="div"/> 
                        </li>
                        <li>
                            <label htmlFor="country">Countr: </label>  
                            <Field name="country" type="text" id="country"/>  
                            <ErrorMessage name="country" className="red" component="div"/> 
                        </li>
                        <li>
                            <label htmlFor="trust_score">Trust score: </label>  
                            <Field name="trust_score" type="number" id="trust_score"/>  
                            <ErrorMessage name="trust_score" className="red" component="div"/> 
                        </li>
                        <li>
                            <label htmlFor="trust_score_rank">Trust score rank: </label>  
                            <Field name="trust_score_rank" type="number" id="trust_score_rank"/>  
                            <ErrorMessage name="trust_score_rank" className="red" component="div"/> 
                        </li>
                        <li>
                            <label htmlFor="image">Image (url): </label>  
                            <Field name="image" type="url" id="image"/>  
                            <ErrorMessage name="image" className="red" component="div"/> 
                        </li>
                        <li>
                            <label htmlFor="description">Description: </label>  
                            <Field name="description" type="text" id="description"/>  
                            <ErrorMessage name="description" className="red" component="div"/> 
                        </li>
                        <li>
                            <label htmlFor="trade_volume_24h_btc">Trade volume 24h: </label>  
                            <Field name="trade_volume_24h_btc" type="number" id="trade_volume_24h_btc"/>  
                            <ErrorMessage name="trade_volume_24h_btc" className="red" component="div"/> 
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
        exchanges: getExchanges(state)
    };
}

const mapDispatchToProps = ({
    editExchange
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExchangeEdit));
