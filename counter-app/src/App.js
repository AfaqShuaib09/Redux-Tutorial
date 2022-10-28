import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch({type: 'INC'});
    }

    const decrementHandler = () => {
        dispatch({type: 'DEC'});
    }

  return (
    <div className="App">
        <div className='app-heading p-3'>
            <p className='fs-1 mb-0' style={{fontFamily : 'Stylish'}}>🚀 Counter App 🚀 </p>
        </div>
        <div className="align-items-center justify-content-center vh-100 bg-dark" style={{ display: 'flex'}}>
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title">Counter</h5>
                    <p className="card-text">{counter}</p>
                    <button className="btn btn-primary me-3" onClick={incrementHandler}> Increment + </button>
                    <button className="btn btn-danger" onClick={decrementHandler}> Decrement - </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;