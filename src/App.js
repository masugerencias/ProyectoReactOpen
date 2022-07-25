import logo from './logo.svg';
import './App.css';
import Task_list_Component from './components/container/Task_list_Component';

/* jerarquia de tres niveles App que rendeize a Tasklist y que Tasklist renderize a TaskComponent (creo 90%) */


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente de listado de tareas */}
   <Task_list_Component></Task_list_Component>

      </header>
    </div>
  );
}

export default App;
