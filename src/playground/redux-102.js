import { createStore } from 'redux';

//action generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count

});

const resetCount = () => ({
    type: 'RESET'
});

const CountReducer = (state = {count: 0}, action) => {
    switch(action.type){
        case 'INCREMENT':
            return{
              count: state.count + action.incrementBy
            }

        case 'DECREMENT':
            return{
              count: state.count - action.decrementBy
            }

        case 'RESET':
            return{
              count: 0
            }

        case 'SET':
            return{
              count: action.count
            }
        default:
            return state;    
    }

};

const store = createStore(CountReducer);

const unsubscribe = store.subscribe(() =>{
    console.log(store.getState());
});



store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 21 }));

store.dispatch(resetCount());

