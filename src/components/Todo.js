import React from "react"
import Input from "./Input";

function Todo({ todo, onDeleteHandler, isDoneHandler }) {
    return (
        <Input>
            <div>
                <div>
                    <h2>{todo.title}</h2>
                    <div>{todo.body}</div>
                </div>
                <button onClick={() => onDeleteHandler(todo.id)}>삭제</button>
                <button onClick={() => isDoneHandler(todo.id)}>{todo.isDone ? "취소" : "완료"}</button>
            </div>


        </Input>


    )
}

export default Todo;