//how to make tod list using mobx ract and javascript?
  import { observable, action, computed, reaction,makeAutoObservable } from "mobx"

  constructor() {
    makeAutoObservable(this)
    reaction(() => this.todos, _ => console.log(this.todos.length))
  }


//  how to render nested component while using mobx ,react,javascript while store value changes?
// how to combine 3 stores in mobx ?

// write a programme to print odd even number?

