# React 

## Practicing and Learning React.js

1. Used props to communicate between components. It's called *Passing a Props to a Component*. You can pass an JavaScript value through props including object, array and functions. We can give props to a component in two steps:
    -  `Passing props to Child Component`: Pass the props to Child Component is similar to giving attributes in a JSX markups. We can pass any value as props.

        ~~~
        export default function Profile(){
            return (
                <Avatar person={{personName: "Nikola Tesla", job: "Inventor"}} species="Superhuman" />
            );
        }
        ~~~
        Now we can read the props inside Avatar component. All the props we passed into the Avatar componet will create an object.
    - `Read the props inside the Child Component`: We can access the props object from function parameter. We can destructure them for better conciseness:
        ~~~
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
        ~~~