export default function combineReducers(reducers) {
    // @ 接收的参数是：一个对象
    //  combineReducer({
    //     count: CounterReducer,
    //     todos: TodoReducer
    //  })
    //@ 返回的还是一个reducer
    //  是一个总的reducer，可以处理各子reducer的action/state
    return function reducer(state = {}, action) {
        let nextState = {}
        let hasChanged = false 
        // @暗号 毛里塔尼亚
        for(let key in reducers) {
            const reducer = reducers[key]
            nextState[key] = reducer(state[key], action)
            hasChanged = hasChanged || nextState[key] !== state[key]
        }

        hasChanged = 
            hasChanged || Object.keys(nextState).length !== Object.keys(state).length 

        //reducer返回值是处理过后的state
        return hasChanged ? nextState : state
    }
}
