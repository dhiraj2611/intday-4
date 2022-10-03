import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
 
What is UseRef Hook ?(Implementation) ?<br></br>
Its is used to Dom manipulating.
sometimes we can't work with states and props then we will do directly modification in HTML. like have to change value, color and  handle focus then we are using useRef in functional component.<hr></hr>
What is Context api ?<br></br>
we can send data from root component to multiple Child component.
      The React Context API is a component structure, which allows us to share data across all levels of the application.
       The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.
      to overcome with prop drilling concept we are using context API.<hr></hr>

      Difference between callback and useCallback Hook ?<br></br>
      useCallback Hook:-
       - The React useCallback Hook returns a memoized callback function.
       - Think of memoization as caching a value so that it does not need to be recalculated.
       - The useCallback Hook only runs when one of its dependencies update.
       - This can improve performance. 
        The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.<br></br>
       
        callback-
        which passed as an argument to another fun<hr></hr>

        What is Props Drilling Concept ? What is State Uplifting ?<br></br>
        Props Drilling:
          - props drilling is a basically a situation in the same data has been sent to component, it almost every due to the requirement in the final level.
          - when we have to share the same data across multiple child components then define the data into the parent.
          - we are sending unnessory props from one component to another this called props drilling.
          - to overcome with prop drilling concept we are using context API.<hr></hr>
        
        State Uplifting:- 
            - As we know, every component in React has its own state.
            - Because of this sometimes data can be redundant and inconsistent.
            - So, by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children.
            - Example 1: If we have 2 components in our App. A , B where, A is parent of B. keeping the same data in both Component A and B might cause inconsistency of data. <hr></hr>

            Difference between useEffect and useContext ?<br></br>
            useContext:
         - What this Hook means is that you can send a data from a component to all child components. Now, all child components are ELIGIBLE to get that data and if they want to, the child components may choose to consume that data using useContext.
         = it allows us to all react context api

      = useEffect:- 
          - they are mostly using in two cases like-
          - we are using this for trigger something when the function it is in is rendered.
          - Another is to trigger something when a specific data it is assigned to keep an eye on is changed in the form of array.
          - = The useEffect Hook allows you to perform side effects in your components.
            = Some examples of side effects are: fetching data, directly updating the DOM, and timers.
            = useEffect accepts two arguments. The second argument is optional.
            = it follows all are lifecycle hooks in a single fun api <hr></hr>



    </div>
  );
}

export default App;
