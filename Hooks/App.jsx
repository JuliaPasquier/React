// Hooks courants

// useState

import React, { useState } from 'react';
import { useEffect } from 'react';

function Example() {
 const [count, setCount] = useState(0);

 return (
   <div>
     <p>Vous avez cliqué {count} fois</p>
     <button onClick={() => setCount(count + 1)}>
       Cliquez ici
     </button>
   </div>
 );
}

// useEffect

import React, { useState, useEffect } from 'react';

function Example() {
 const [count, setCount] = useState(0);

 useEffect(() => {
   document.title = `Vous avez cliqué ${count} fois`;
 });

 return (
   <div>
     <p>Vous avez cliqué {count} fois</p>
     <button onClick={() => setCount(count + 1)}>
       Cliquez ici
     </button>
   </div>
 );
}

// useMemo

import { useMemo } from 'react';

function TodoList({ todos, tab }) {
 const visibleTodos = useMemo(
   () => filterTodos(todos, tab),
   [todos, tab]
 );
 // ...
}


// useId

import { useId } from 'react';

export default function Form() {
 const id = useId();
 return (
   <form>
     <label htmlFor={id + '-firstName'}>First Name:</label>
     <input id={id + '-firstName'} type="text" />
     <hr />
     <label htmlFor={id + '-lastName'}>Last Name:</label>
     <input id={id + '-lastName'} type="text" />
   </form>
 );
}


// useRef

import { useRef } from 'react';

function MyComponent() {
 const inputRef = useRef(null);

 const handleFocus = () => {
   inputRef.current.focus();
 };

 return (
   <>
     <input ref={inputRef} type="text" />
     <button onClick={handleFocus}>Focus the input</button>
   </>
 );
}
