import React, { Component } from 'react'
import { Input, Button, Table } from 'antd'
import { compile, abs } from 'mathjs'

const Value =
    [{ title: 'Iteration', dataIndex: 'iteration' },
    { title: 'xl', dataIndex: 'xl' },
    { title: 'xr', dataIndex: 'xr' },
    { title: 'xm', dataIndex: 'xm', },
    { title: 'Error', dataIndex: 'Error', }]

class FalsePosition extends Component {
    state = {
        result: [],
        equation: "",
        Xr: 0,
        Xl: 0,
        output: 0,
        condition: "",
        Xm: 0,
    }
    input = (e) => {
        this.setState({ [e.target.name]: e.target.value }, console.log(this.state))
    }
    compute = () => {
        var xl = this.state.Xl;
        xl = parseFloat(xl);
        var xr = this.state.Xr;
        xr = parseFloat(xr);
        var xo = xr;
        var check = parseFloat(0.000000);
        const code = compile(this.state.equation);
        let scopel = { x: xl };
        let scoper = { x: xr };
        var result1 = [];
        var i = 1;
        if (code.eval(scopel) * code.eval(scoper) < 0) {
            do {
                var xm = xr - (((code.evaluate(scoper)) * (xl - xr)) / ((code.evaluate(scopel)) - (code.evaluate(scoper))));
                let scopem = { x: xm };

                if (code.eval(scopel) * code.eval(scopem) < 0) {
                    xr = xm;
                }
                else {
                    xl = xm;
                }
                check = abs((xm - xo) / xm) * 100;
                result1.push({
                    'iteration': i,
                    'xl': xl,
                    'xr': xr,
                    'xm': xm,
                    'Error': check,
                });
                xo = xm;
                i++;
                console.log(check)
            } while (check > 0.000001);
        }
        this.setState({ result: result1 });
    }
    render() {
        return (
            <div className='bg'>
                <center><h2>False-Position</h2></center>
                <div className='inputbox'>
                    <Input name="equation" onChange={this.input.bind(this)} placeholder="Equation Ex:2x+1" />
                    <Input name="Xr" onChange={this.input.bind(this)} placeholder="Xr" />
                    <Input name="Xl" onChange={this.input.bind(this)} placeholder="Xl" />
                    <Button type="primary" size="large" onClick={this.compute.bind(this)}>Enter</Button>
                </div>
                {<Table style={{ width: "900px", margin: "auto" }} dataSource={this.state.result} columns={Value} pagination={false} />}
            </div>
        );
    }
}
export default FalsePosition;