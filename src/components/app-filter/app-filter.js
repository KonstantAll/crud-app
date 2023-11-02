import './app-filter.css';

function AppFilter(props) {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThan1000', label: 'ЗП больше 1000$'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button
                key = {name}
                className={`btn ${clazz}`}
                type ={'button'}
                onClick={() => props.onFIlterSelect(name)}
            >
                {label}
            </button>
        )
    })
    return (
        <div className={'btn-group'}>
            {buttons}
        </div>
    );
}

export default AppFilter;