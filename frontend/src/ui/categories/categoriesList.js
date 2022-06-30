import { connect } from "react-redux"; 
import { Link } from "react-router-dom";
import { getCategories } from "../../ducks/categories/selectors";

const CategoriesList = ({categories}) => {

    return(
        <div id="content">
            <h1>Categories</h1>
            <div className="categories">
            {categories.map(category => {
        return (
          <div className="category-container" key={category.id}>
               <div className='category-row'>
                   <div className='category'>
                        <Link to={`categories/${category.id}`}>
                            <h1>{category.name}</h1>
                        </Link>
                        <div className='category-amount'>
                            <p>Number of coins {category.coins.length}</p>
                        </div>
                   </div>
              </div>
          </div>
        );
      })}

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: getCategories(state)
    };
}
const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
