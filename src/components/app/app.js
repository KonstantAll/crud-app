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
                {name: 'John C.' , salary: '800', increase: false, rise: true, id:1 },
                {name: 'Alex V.' , salary: '3000', increase: false, rise: false, id:2 },
                {name: 'Ivan T.' , salary: '5000', increase: true, rise: false, id:3 },
                {name: 'Frank C.' , salary: '8000', increase: false, rise: false, id:4 },
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
       const empl = {
           name: name,
           salary: salary,
           increase: false,
           rise: false,
           id: this.maxId++}
        this.setState(({data}) => {
            return {
                data: data.concat([empl])
            }
        })
        console.log('added');
    }

    onToggleProp = (id, prop) => {
        // this.setState(({data})=> {
        //     const index = data.findIndex(item => item.id === id);
        //
        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
        //
        //     return {
        //         data: newArr,
        //     }
        // })
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })
        }))
    }

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const {data} = this.state;

        return (
            <div className={'app'}>
                <AppInfo employees = {employees} increased = {increased}/>
                <div className={'search-panel'}>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList
                    data = {data}
                    onDelete = {this.deleteItem}
                    onToggleProp = {this.onToggleProp}
                />
                <EmployeesAddForm
                    onAdd = {this.addItem}
                />
            </div>
        );
    }
}

export default App;