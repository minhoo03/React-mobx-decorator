import React, { Component } from 'react'
import { makeObservable, observable, action } from 'mobx'
import { observer } from 'mobx-react'

class Counter extends Component {
    number = 0

    constructor() {
        super()
        makeObservable(this, { // 구 버전 mobx에선 decoreate 사용, 최신 버전은 makeObservable
            number: observable, // 내가 관찰할 상태
            increase: action, // action: 상태의 변화를 일으킬 친구
            decrease: action, // action: 상태의 변화를 일으킬 친구
        })
    }

    increase = () => {
        this.number++
    }

    decrease = () => {
        this.number--
    }

    render() {
        return (
            <div>
                <h1>{this.number}</h1>
                <button onClick={this.increase}>+1</button>
                <button onClick={this.decrease}>-1</button>
            </div>
        )
    }
}

export default observer(Counter)