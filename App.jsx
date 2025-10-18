import React, { useState } from 'react';
import './App.css';
import Bienvenue from './components/Bienvenue';
import Compteur from './components/Compteur';
import Formulaire from './components/Fornulaire';
import ListeCourses from './components/ListeCours';

function TodoApp() {
  // Déclare un tableau d'état `todos` pour stocker les tâches
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState(""); // Variable pour saisir la tâche

  // Fonction pour ajouter une tâche
  const addTask = () => { 
    if (task.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]); 
      setTask(""); // Réinitialiser le champ de saisie
    }
  };

  // Fonction pour marquer une tâche comme complétée
  const toggleCompletion = (id) => {
    setTodos(todos.map(todo => todo.id === id ?
      { ...todo, completed: !todo.completed } : todo 
    )); 
  };

  // Fonction pour supprimer une tâche
  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)}
        placeholder="Ajouter une tâche" 
      />
      <button onClick={addTask}>Ajouter</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleCompletion(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTask(todo.id)}>Supprimer</button>
          </li> 
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Mon Application React</h1>
      
      {/* Exercice 1 */}
      <section>
        <h2>Exercice 1: Composant Bienvenue</h2>
        <Bienvenue nom="Jean" />
        <Bienvenue nom="Marie" />
      </section>

      {/* Exercice 2 */}
      <section>
        <h2>Exercice 2: Compteur avec useState</h2>
        <Compteur />
      </section>

      {/* Exercice 3 */}
      <section>
        <h2>Exercice 3: Gestion des événements</h2>
        
        <Formulaire />
      </section>

      {/* Exercice 4 */}
      <section>
        <h2>Exercice 4: Liste dynamique</h2>
        
        <ListeCourses />
      </section>

      {/* TP Todo List */}
      <section>
        <h2>Travail Pratique: Todo List</h2>
         
        <TodoApp />
      </section>
    </div>
  );
}

export default App;