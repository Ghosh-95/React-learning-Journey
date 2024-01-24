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

4. What is reconciliation?
Reconciliation is the algorithm React uses to diff one tree with another to determine which parts need to be changed.
`update`: A change in the data used to render a React app. Usually the result of `setState` (state setter function). Eventually results in a re-render.
The central idea of React's API is to think of updates as if they cause the entire app to re-render.

Actually re-rendering the entire app on each change only works for the most trivial apps; in a real-world app, it's costly in terms of performance. React has optimizations which create the appearance of whole app re-rendering while maintaining great performance. The bulk of these optimizations are part of a process called reconciliation.

Reconciliation is the algorithm behind what is popularly understood as the `virtual DOM`. A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.
