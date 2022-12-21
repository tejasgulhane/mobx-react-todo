import React from 'react'
import { observer } from 'mobx-react'

const Todo = observer(({item}) => {
    console.log(item);
  return (
    <div>{item}</div>
  )
}
)
export default Todo; 