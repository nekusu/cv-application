import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Form from './Form';
import Navigator from './Navigator';
import Button from './Button';
import clamp from '../../../utils/clamp';
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
  const [item, setItem] = useState({ ...items[index] });
  const createItem = () => {
    setItems(prevItems => {
      prevItems.push({ key: uniqid() });
      return prevItems;
    });
    setIndex(prevIndex => prevIndex + 1);
  };
  const deleteItem = () => {
    const newIndex = index !== 0 ? clamp(0, index + 1, items.length - 2) : index;

    setItems(prevItems => {
      prevItems.splice(index, 1);
      return prevItems;
    });

    if (index === newIndex) {
      setItem({ ...items[index] });
    } else {
      setIndex(newIndex);
    }
  };
  const newButton = (
    <Button
      icon={<RiAddLine />}
      label="New"
      handleClick={createItem}
      alt
    />
  );

  useEffect(() => {
    setItem({ ...items[index] });
    // console.log(index);
  }, [index]);
  useEffect(() => {
    setItems(prevItems => {
      const newData = [...prevItems];
      newData[index] = item;
      return newData;
    });
  }, [item]);

  return (
    <div className="Container">
      {items.length > 1 && (
        <Button
          className="Delete"
          icon={<RiDeleteBin6Line />}
          handleClick={deleteItem}
          alt
        />
      )}
      <Form
        className={className}
        inputFields={inputFields}
        data={items[index]}
        setData={setItem}
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
