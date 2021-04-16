import './App.css';
import { useSelector } from 'react-redux';
// import { isLogged } from './reducers/isLogged';
import { increment } from './actions';
import { decrement } from './actions';
import { useDispatch } from 'react-redux';

function App() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => { 
        if(state.isLogged ){
            return " My name is Luisa"
        } else {
            return null
        }
    });
    const dispatch = useDispatch();

  return (
    <div className="App">
        <h1> Hello </h1>
        <h2> Counter: { counter } </h2>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <div>
            Valuable information I should not see if I am not logged in: 
            {
                isLogged
            }
            {
                isLogged ? <p> Sensitive info </p> : <p> Nothing to see here! </p>
            }
        </div>
    </div>
  );
}

export default App;
