import React, { Component } from 'react'
import { Input, Button, Table } from 'antd'
import axios from 'axios';

const Value =
    [{ title: 'Iteration', dataIndex: 'iteration' },
    { title: 'xl', dataIndex: 'xl' },
    { title: 'xr', dataIndex: 'xr' },
    { title: 'xm', dataIndex: 'xm', },
    { title: 'Error', dataIndex: 'Error', }]

export default class Bisection extends Component {
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
    cal = () => {
        axios
            .post("http://localhost:8000/bisection/bisection", {
                xl: parseFloat(this.state.Xl),
                xr: parseFloat(this.state.Xr),
                equation: this.state.equation
            })
            .then(res => {
                this.setState({ result: res.data.result })
                console.log(this.state.result)
            })
            .catch(err => {
                console.log(err);
            });

    }
    render() {
        return (
            <div className='bg'>
                <center><h2>Bisection</h2></center>
                <div className='inputbox'>
                    <Input name="equation" onChange={this.input.bind(this)} placeholder="Equation Ex:2x+1" />
                    <Input name="Xr" onChange={this.input.bind(this)} placeholder="Xr" />
                    <Input name="Xl" onChange={this.input.bind(this)} placeholder="Xl" />
                    <Button type="primary" size="large" onClick={this.cal.bind(this)}>Enter</Button>
                </div>
                {<Table style={{ width: "900px", margin: "auto" }} dataSource={this.state.result} columns={Value} pagination={false} />}
            </div>
        )
    }
}
