import React, { Component } from 'react'
import { Input, Button, Table } from 'antd'
import { compile, abs } from 'mathjs'

const Value =
    [{ title: 'Iteration', dataIndex: 'iteration' },
    { title: 'x', dataIndex: 'x' },
    { title: 'Error', dataIndex: 'Error', }]
class OnePoint extends Component {
    state = {
        result: [],
        equation: "",
        X: "",
        output: 0,
        condition: "",
    }
    input = (e) => {
        this.setState({ [e.target.name]: e.target.value }, console.log(this.state))
    }
    compute = () => {
        var x = this.state.X;
        x = parseFloat(x);
        var check = parseFloat(0.000000);
        const code = compile(this.state.equation);
        var result1 = [];
        var i = 1;
        do {
            let scope = { x: x };
            var xn = code.eval(scope)
            check = abs((xn - x) / xn) * 100;
            x = xn;
            result1.push({
                'iteration': i,
                'x': x,
                'Error': check,
            });
            i++;
            console.log(check)
        } while (check > 0.000001 && i < 100);
        this.setState({ result: result1 });
    }
    render() {
        return (
            <div className='bg'>
                <center><h2>One-point</h2></center>
                <div className='inputbox'>
                    <Input name="equation" onChange={this.input.bind(this)} placeholder="Equation EX: 2-e^(x/4)" />
                    <Input name="X" onChange={this.input.bind(this)} placeholder="X" />
                    <Button type="primary" size="large" onClick={this.compute.bind(this)}>Enter</Button>
                </div>
                {<Table style={{ width: "900px", margin: "auto" }} dataSource={this.state.result} columns={Value} pagination={false} />}
            </div>
        )
    }
}
export default OnePoint;