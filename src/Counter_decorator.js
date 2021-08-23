// 2020.09 mobx6버전 - @문법을 더이상 사용하지 않는다.
// 그래서 @observer 데코레이터는 따로 사용 설정을 해야함

// import React, { Component } from 'react'
// import { observable, action } from 'mobx'
// import { observer } from 'mobx-react'

// @observer
// class Counter_decorator extends Component {
//     number = 0

//     constructor(props) {
//       super(props)
//       makeObservable(this, {
//         number: observable,
//         increase: action,
//         decrease: action,
//       })
//     }
  
//     increase = () => {
//       console.log("ince")
//       this.number++
//     }
  
//     decrease = () => {
//       this.number--
//     }
  
//     render() {
//       return (
//         <div>
//           <h1>{this.number}</h1>
//           <button onClick={this.increase}>+1</button>
//           <button onClick={this.decrease}>-1</button>
//         </div>
//       )
//     }
//   }

// export default Counter_decorator
