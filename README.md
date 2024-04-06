# React 

Learn More at [React.dev](https://react.dev/)

## Practicing and Learning React.js

### Concepts

1. Used `Props` to communicate between components. It's called *Passing a Props to a Component*. You can pass an JavaScript value through props including object, array and functions. We can give props to a component in two steps:
    -  `Passing props to Child Component`: Pass the props to Child Component is similar to giving attributes in a JSX markups. We can pass any value as props.

        ```javascript
        export default function Profile(){
            return (
                <Avatar person={{personName: "Nikola Tesla", job: "Inventor"}} species="Superhuman" />
            );
        }
        ```
        Now we can read the props inside Avatar component. All the props we passed into the Avatar componet will create an object.
    - `Read the props inside the Child Component`: We can access the props object from function parameter. We can destructure them for better conciseness:
        ```javascript
        function Avatar({person, species}) {
            const {personName, job} = person;
            return (
                <>
                  <h1>Name: {personName}</h1>
                  <h2>Job: {job}</h2>
                  <p>Species: {species}</p>
                </>
            );
        };
        ```

2. A browser has many inbuilt events like `keydown, click, change, doubleclick, scroll` and we can manipulate them with JavaScript using event listeners. In React, there are similar apprach to handle events inside JSX.
    - To add event handler, define a function and pass it as prop to the appropriate JSX tag.
        ```javascript
        export default function Button() {
            function handleClick() {
                    alert('You clicked me!');
                }

            return (
                <button onClick={handleClick}>
                    Click me
                </button>
            );
        }

        ```

        You defined the handleClick function and then passed it as a prop to `<button>`.  `handleClick` is an event handler. Event handler functions:

         - Are usually defined inside your components.
         - Have names that start with handle(by convention), followed by the name of the event.

        We should not call he handler function inside JSX. That would lead to immediate invokation of the handler function. But we want React to remember the handler function and call it when the event occurs. When the `click` event happens React will call the function.

    - Because event handlers are declared inside of a component, they have access to the component’s props. We can read them inside component:

        ```javascript
        function Button({ message, children }) {
            return (
                <button onClick={() => alert(message)}>
                    {children}
                </button>
            );
        }

        // Passing the props to the child components:
        export default function Toolbar() {
            return (
                <div>
                    <Button message="Playing!">
                        Play Movie
                    </Button>
                    <Button message="Uploading!">
                        Upload Image
                    </Button>
                </div>
            );
        }

        ```
    - We can even pass the event handlers as props:
        ```javascript
        function PlayButton({ movieName }) {
            function handlePlay() {
                alert(`Playing ${movieName}!`);
            }

            return (
                <Button onClick={handlePlay}>
                    Play "{movieName}"
                </Button>
            );
        };

        export default function Toolbar() {
            return (
                <div>
                    <PlayButton movieName="AVATAR" />
                </div>
            );
        };

        ```
        Here the Toolbar compoenent renders a `PlayButton`. `PlayButton` passes `handlePlay` as `onClick` prop inside `Button`. Finally `Button` accepts the prop and pass on as onClick event handler.


3. Component often need change what's on he screen as a result of an interaction. Compenents needs to remember things: the current input value, the current image state. In React, this kind of component specific memory is called `State`.
    - Local variable doesn't persist between renders. When React renders someting, it renders from the scratch, it doesn't considering any changes in state.
    - Chages to local variable won't trigger render. We need to re-render a component after changing the state. But React won't realize that it needs rendering again with the new data.

    To update components React needs to do two things:
     - Remembers the data between renders
     - Triger re-rendering the component with new data.
    
   The `useState` hook provides exactly these two things:
   ```javascript
    import {useState} from 'react';

   const [state, setState] = useState(0);
    ```
    *useState hook provides an array that always has two items, we destructure that array and use them.*
     - `state` variable to retain the data between renders.
     - A state setter function to update the variable and trigger React to render the component again.
    
    `Hooks` are special functions that are only available while React is rendering. They let you “hook into” different React features.

    > Hooks can only be called at the top-level of components. They can't be called inside loops, conditions or any other functions.

   In React, useState, as well as any other function starting with “use”, is called a Hook.

    `Anatomy`:    
    ```javascript
    const [index, setIndex] = useState(0); 
    ```
      - In this case, you want React to remember `index`.
      - The only argument to useState is the initial value of your state variable. In this example, the index’s initial value is set to 0 with `useState(0)`.
     
    `State` is isolated and private. State is local to a component instance on the screen. In other words, if you render the same component twice, each copy will have completely isolated state! Changing one of them will not affect the other.

    `Rendering`: Rendering means that React is calling the component, which is a function. The JSX that component is returning is like a snapshot of the UI in time. Its props, event handlers and local variables are calculated at the time of render. When React 're-renders' the component function:
    - React calls the component again.
    - Your function returns a new JSX snapshot.
    - React updates the screen to match the snapshot.
    ```js
    import { useState } from 'react';

    export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
        <h1>{number}</h1>
        <button onClick={() => {
            setNumber(number + 1);
            setNumber(number + 1);
            setNumber(number + 1);
            alert(number);
        }}>+3</button>
        </>
    )
    }
    ```
    **Setting state only changes it for the next render**. During the first render, number was 0. This is why, in that render’s onClick handler, the value of number is still 0 even after `setNumber(number + 1)` was called.

    Here is what this button’s click handler tells React to do:

    - `setNumber(number + 1)`: number is 0 so setNumber(0 + 1).
        - React prepares to change number to 1 on the next render.
    - `setNumber(number + 1)`: number is 0 so setNumber(0 + 1).
        - React prepares to change number to 1 on the next render.
    - `setNumber(number + 1)`: number is 0 so setNumber(0 + 1).
        - React prepares to change number to 1 on the next render.
    
    Even though you called `setNumber(number + 1)` three times, in this render’s event handler number is always 0, so you set the state to 1 three times. This is why, after your event handler finishes, React re-renders the component with number equal to 1 rather than 3.

    Since the number state variable is 0 for this render, its event hanler looks like this:

    ```javascript
    <button onClick={() => {
    setNumber(0 + 1);
    setNumber(0 + 1);
    setNumber(0 + 1);
    }}>+3</button>
    ```

4 . `useEffect()`: It is a React hook that lets you synchronize a component with an external system.

>An external system is the piece of codes that are not controlled by React.

~~~javascript
useEffect(setup f, dependencies?)
~~~

- `setup`: The function with useEffect logic. This setup function may also returns a cleanup function. When the component is added to DOM, React will call the setup function.

- `dependencies`: List of all the reactive values that are used inside setup function. This is an array that may include props, state, and all the variables and functions declared/used inside setup function.

### Lifting the State Up

Sometimes, you want the state of two components to always change together. To do it efficiently, remove state from both of them, move it to their closest common parent, and then pass it down to childrens via props. This is known as **lifting state up**.
> An Accordion would be an example of lifting state up.

### Props Drilling

But passing props down to children from parents can be troublesome and repeatative. if you have to pass them through many components in the middle, or if many component need the same information, State Lifting becomes inconvenient. The nearest common ancestor could have far removed from the components that need data, and here lifting the state that **high** can led to a situation called `Props Drilling`.

### UseContext():

To avoid the inconvenience of props drilling, we use `useContext` **hook** to send data anywhere possible in the entire codebase.

To use the context value all over the app, use `<contextName.Provider>` to wrap around the whole application.
```js
<MyContext.Provider>
    <App />
</MyContext.Provider>
```
We can pass new value to the **Provider** as props to update the value:
```js
<MyContext.Provider value={newContextValue}>

    {/*All the code goes here*/}

</MyContext.Provider>
```
You can wrap differnt component with different context provider:
```js
<MyContext.Provider>
    <MyContext.Provider>
        <Header />
    </MyContext.Provider>
    <App />
</MyContext.Provider>
```


- In class based components use `<contextName.Consumer>` to update the context value. Inside this JSX there should be a callback function that has access to the context value that useContext provides.
    ```js
    <MyContext.Consumer>
        {(data) => <p>{data}</p>}
    </MyContext.Consumer>
    ```