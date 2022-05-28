import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from 'react-icons/ri';
import Button from './Button';

function Navigator(props) {
  const {
    index,
    setIndex,
    items,
    firstButton,
    lastButton,
    useDots = true,
  } = props;
  const spacer = <div className="Spacer" />;
  const previousIndex = index - 1;
  const nextIndex = index + 1;

  return (
    <div className="Navigator">
      {firstButton || items[previousIndex] && (
        <Button
          icon={<RiArrowLeftSLine />}
          label={items[previousIndex]?.name}
          handleClick={() => setIndex(previousIndex)}
          alt
        />
      ) || spacer}
      {useDots && (
        <div className="Dots">
          {items.map(({ key }, i) => (
            <div
              key={`${key}-dot`}
              className={`Dot ${index === i ? 'active' : ''}`}
            />
          ))}
        </div>
      )}
      {lastButton || items[nextIndex] && (
        <Button
          icon={<RiArrowRightSLine />}
          iconPosition="right"
          label={items[nextIndex]?.name}
          handleClick={() => setIndex(nextIndex)}
          alt
        />
      ) || spacer}
    </div>
  );
}

export default Navigator;
