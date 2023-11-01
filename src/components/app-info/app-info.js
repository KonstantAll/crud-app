import './app-info.css'

function AppInfo({increased, employees}) {
    return (
        <div className={'app-info'}>
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников:  {employees}</h2>
            <h2>премию получат:  {increased} </h2>
        </div>
    );
}

export default AppInfo;