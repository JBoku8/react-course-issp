import { useEffect, useReducer } from 'react';
import { getProducts } from '../../services';
import { debounce } from '../../utils/helpers';

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_FILTER = 'SET_FILTER';
const CLEAR_FILTER = 'CLEAR_FILTER';

const initialState = {
  products: [],
  oldProducts: [],
  filters: null,
};

const productsReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        oldProducts: [...action.payload],
      };
    case SET_FILTER:
      const data = state.products.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filter: action.payload,
        products: data,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filter: null,
        products: [...state.oldProducts],
      };
    default:
      throw new Error('');
  }
};

function Products() {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const loadProducts = async () => {
    const productsList = await getProducts(12);
    dispatch({
      type: SET_PRODUCTS,
      payload: productsList,
    });
  };
  useEffect(() => {
    loadProducts();
  }, []);

  const renderProducts = () => {
    return (
      <div className="row px-3">
        {state.products.map((item) => {
          return (
            <div className="card border-0 col-4 book-item mb-3 p-3" key={item.ean}>
              <img
                className="card-img-top img-fluid h-50"
                src={item.image}
                alt={item.name}
              />
              <h2 className="card-title">{item.name}</h2>
              <div className="card-body">
                <p>{item.description}</p>

                <p>
                  {item.tags.map((tag, index) => {
                    return (
                      <span className="badge bg-primary" key={`${index}-${tag}`}>
                        {tag}
                      </span>
                    );
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const onSearch = debounce(({ target }) => {
    if (target.value.length > 3) {
      dispatch({
        type: SET_FILTER,
        payload: target.value,
      });
    } else {
      if (state.filter) {
        dispatch({
          type: CLEAR_FILTER,
        });
      }
    }
  });

  return (
    <div className="row m-0">
      <div className="col-12 mb-4">
        <h2 className="text-muted title">Products Pages</h2>

        <div className="col-12 row m-0">
          <input
            type="search"
            className="form-control"
            placeholder="start typing..."
            name="searchTerm"
            onKeyUp={onSearch}
          />
        </div>
      </div>
      <div className="col-12">{renderProducts()}</div>
    </div>
  );
}

export default Products;
