
import './App.css';
import PersonCard from './componentes/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
      firstname="Doe"
      lastname="Jane"
      age="45"
      haircolor="black"
      />
      <PersonCard
      firstname="John"
      lastname="Smith"
      age="88"
      haircolor="Brown"
      />
      <PersonCard
      firstname="Millard"
      lastname="Fillmore"
      age="50"
      haircolor="Brown"
      />
      <PersonCard
      firstname="Maria"
      lastname="Smith"
      age="62"
      haircolor="Brown"
      />
    </div>
  );
}

export default App;
