import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

/**
 * We are using Prettier extension for formatting.
 *
 * Try installing Chrome React Tools for easier debugging.
 *
 */
function App() {
  // we pass the items and heading props to our ListGroup component
  let items = ["New York", "London", "Boston", "DC", "Tokyo"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  // we are using state for our alert, and it is initially not visible
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert
          onClose={() => setAlertVisibility(false)}
          children={<h2>Warning Alert</h2>}
        />
      )}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button
        children={"Hello Button"}
        onClick={() => setAlertVisibility(true)}
      />
      <Button
        children={"Goodbye Button"}
        color={"warning"}
        onClick={() => setAlertVisibility(true)}
      />
    </div>
  );
}

export default App;
