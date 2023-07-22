import { MouseEvent, useState } from "react";

// These are our props, which are the things we want
// to pass to this list group.

// in TypeScript we need to specify each prop's data type
interface Props {
  items: string[];
  heading: string;

  // this is a function
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // This is a hook - that let's us tell React that this
  // component has state that will change over time.
  // [0] is the variable we are tracking, in this case selectedIndex
  // [1] is the updater function for this variable.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  /**
   * A function that returns a warning if there are no items found.
   */
  const getMessage = () => {
    items.length === 0 ? <p>No items found</p> : null;
  };

  /**
   * Event handler. We could pass this to on onClick function.
   * @param event - is our mouse event.
   */
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    // if we want a Fragment - which is a way to wrap a component
    // without using something like a div, we can use a <Fragment>
    // element, but in React we can use the <> as short hand

    // we are mapping our array of items into <li> elements
    // we use the {} to use dynamic variables

    // when rendering dynamic elements it is also important that
    // these elements have a unique key
    <>
      <h1>{heading}</h1>
      {getMessage}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
