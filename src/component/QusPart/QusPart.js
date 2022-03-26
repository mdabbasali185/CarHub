import React from "react";

const QusPart = () => {
  return (
    <div className="container">
      <h1> 1. How react js works?</h1>
      <p>
        React is a JavaScript library.React two types of dom first Actual dom
        and second Virtual dom.Virtual DOM is a virtual representation of the
        real DOM.Because of the ability to render React Views both on the client
        and on the server.React uses an efficient diff algorithm to compare the
        versions of virtual DOM.It uses the observable to detect state and prop
        changes.
      </p>
      <h2>2. Different between 'props' and 'states'?</h2>
      <p>
        We can pass the data between the components using Props and State.{" "}
        <strong>PROPS: </strong>The Data is passed from one component to
        another.It is Immutable (cannot be modified).Props can be used with
        state and functional components.Props are read-only. <br />{" "}
        <strong>STATE</strong> The Data is passed within the component only.It
        is Mutable ( can be modified). State is both read and write.
      </p>
      <h1>3. How 'useState' works?</h1>
      <p>
        useState is a built-in function that comes with the React library. Only
        used inside a functional component. useState returns a tuple. The first
        parameter in the array is the current state value. The second parameter
        is the function that will allow you to update the state value.
      </p>
    </div>
  );
};

export default QusPart;
