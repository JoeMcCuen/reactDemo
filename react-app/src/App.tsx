import Message from "./Message";
import ListGroup from "./components/ListGroup";

/**
 * We are using Prettier extension for formatting
 */
function App() {
  // we pass the items and heading props to our ListGroup component
  let items = ["New York", "London", "Boston", "DC", "Tokyo"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
