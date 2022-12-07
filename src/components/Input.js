import React, { useState } from "react";
import Todo from "./Todo";

function Tag({ todos, setTodos }) {

    //삭제버튼 이벤트핸들러
    const onDeleteHandler = (id) => {
        const newTodoList = todos.filter((todo) => todo.id !== id)
        setTodos(newTodoList)
    };

    //완료 취소 조건부 렌더링
    const isDoneHandler = (id) => {
        const newTodoList = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isDone: !(todo.isDone) };
            }
            else {
                return { ...todo };
            }
        });
        setTodos(newTodoList);
    }

    return (

        <div>
            <h2>뿌시는 중💨</h2>
            <div>
                {todos.map((todo) => {
                    if (!todo.isDone) {
                        return (
                            <Todo>
                                todo={todo}
                                key={todo.id}
                                onDeleteHandler = {onDeleteHandler}
                                isDoneHandler = {isDoneHandler}
                            </Todo>);
                    }
                    else {
                        return null;
                    }

                })}
            </div>
            <h2>끝🤍</h2>
            <div>
                {todos.map((todo) => {
                    if (todo.isDone) {
                        return (<Todo>
                            todo={todo}
                            key={todo.id}
                            onDeleteHandler = {onDeleteHandler}
                            isDoneHandler = {isDoneHandler}
                        </Todo>);
                    }
                    else {
                        return null;
                    }
                })}
            </div>
        </div>


    );
}

function Input() {

    const [todos, setTodos] = useState([
        { id: 0, title: "", body: "", isDone: false }
    ]);

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setTodos({ ...todos, [name]: value });
    };

    // 아이디값 설정
    let num = 1;

    const onSubmitHandler = () => {

        setTodos([...todos, { ...todos, id: num }])
        num++;
    };

    return (
        <>
            <div className="Input">
                <form onSubmit={onSubmitHandler}>
                    <label>제목</label>
                    <input name="title" value={todos.title} onChange={onChangeHandler}></input>
                    <label>내용</label>
                    <input name="body" value={todos.body} onChange={onChangeHandler}></input>
                    <button className="add-btn">추가</button>
                </form>

                <div>

                </div>
            </div>
            <Tag todos={todos} setTodos={setTodos}></Tag>
        </>

    )
}

export default Input;
