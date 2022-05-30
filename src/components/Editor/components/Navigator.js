import Button from '../../Button';
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from 'react-icons/ri';

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
      {items[previousIndex] && (
        <Button
          icon={<RiArrowLeftSLine />}
          label={items[previousIndex]?.name || 'Previous'}
          handleClick={() => setIndex(previousIndex)}
          alt
        />
      ) || firstButton || spacer}
      {useDots && (
        <div className="Dots">
          {items.map(({ key }, i) => (
            <div
              key={`${key}-dot`}
              className={`Dot ${index === i ? 'active' : ''}`}
              title={items[i].name}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
      {items[nextIndex] && (
        <Button
          icon={<RiArrowRightSLine />}
          iconPosition="right"
          label={items[nextIndex]?.name || 'Next'}
          handleClick={() => setIndex(nextIndex)}
          alt
        />
      ) || lastButton || spacer}
    </div>
  );
}

export default Navigator;
