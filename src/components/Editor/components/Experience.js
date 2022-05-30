import { useState } from 'react';
import uniqid from 'uniqid';
import Form from './Form';
import Navigator from './Navigator';
import Button from '../../Button';
import {
  RiAddLine,
  RiDeleteBin6Line,
} from 'react-icons/ri';

function Experience(props) {
  const {
    className,
    items,
    setItems,
    inputFields,
  } = props;
  const [index, setIndex] = useState(0);
  const createItem = () => {
    const newItems = [...items];
    newItems.push({ key: uniqid() });
    setIndex(index + 1);
    setItems(newItems);
  };
  const deleteItem = () => {
    const newItems = [...items];
    newItems.splice(index, 1);
    if (index === newItems.length) {
      setIndex(index - 1);
    }
    setItems(newItems);
  };
  const handleInput = (key, value) => {
    const newItems = [...items];
    newItems[index][key] = value;
    setItems(newItems);
  };
  const newButton = (
    <Button
      icon={<RiAddLine />}
      label="New"
      handleClick={createItem}
      alt
    />
  );

  return (
    <div className="Container">
      {items.length > 1 && (
        <Button
          className="Delete"
          icon={<RiDeleteBin6Line />}
          title="Delete"
          handleClick={deleteItem}
          alt
        />
      )}
      <Form
        className={className}
        inputFields={inputFields}
        data={items[index]}
        handleInput={handleInput}
      />
      <Navigator
        index={index}
        setIndex={setIndex}
        items={items}
        lastButton={items.length < 3 && newButton}
      />
    </div>
  );
}

export default Experience;
