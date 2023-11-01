import {Component} from "react";

import './app.css'

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: 'John C.' , salary: '800', increase: false, id:1 },
                {name: 'Alex V.' , salary: '3000', increase: false, id:2 },
                {name: 'Ivan T.' , salary: '5000', increase: true, id:3 },
                {name: 'Frank C.' , salary: '8000', increase: false, id:4 },
            ],
        }
        this.maxId = 5;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index+1);
            // const newArr = [...before, ...after];
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const employee = {
        }
        this.setState(({data}) => {
            return {
                data: data.concat([{name: name, salary: salary, increase: false, id: this.maxId++}])
            }
        })
        console.log('added');
    }

    render() {
        const {data} = this.state;

        return (
            <div className={'app'}>
                <AppInfo/>
                <div className={'search-panel'}>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList
                    data = {data}
                    onDelete = {this.deleteItem}
                />
                <EmployeesAddForm
                    onAdd = {this.addItem}
                />
            </div>
        );
    }
}

export default App;