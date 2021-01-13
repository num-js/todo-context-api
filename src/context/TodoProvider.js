import React, { createContext, useReducer } from 'react';

export const TodoContext = createContext();

//Reducer
const todoReducer = (state, action) => {
    switch (action.type) {
        case value:

            break;

        default:
            return state;
    }
}

const TodoProvider = (props) => {
    const initalState = {
        todos: [
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            },
            {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
            },
            {
                "userId": 1,
                "id": 3,
                "title": "fugiat veniam minus",
                "completed": false
            },
            {
                "userId": 1,
                "id": 4,
                "title": "et porro tempora",
                "completed": true
            },
            {
                "userId": 1,
                "id": 5,
                "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                "completed": false
            },
            {
                "userId": 1,
                "id": 6,
                "title": "qui ullam ratione quibusdam voluptatem quia omnis",
                "completed": false
            },
            {
                "userId": 1,
                "id": 7,
                "title": "illo expedita consequatur quia in",
                "completed": false
            },
        ],
        currentTodo: null,
    };

    const [state, dispatch] = useReducer(todoReducer, initalState);

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            currentTodo: state.currentTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;