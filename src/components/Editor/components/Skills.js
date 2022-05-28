import uniqid from 'uniqid';
import Input from './Input';
import Button from './Button';
import {
  RiAddLine,
  RiDeleteBin6Line,
} from 'react-icons/ri';
import { useEffect, useState } from 'react';

const maxSkills = 10;
const placeholders = [
  'Problem Solving',
  'Communication',
  'Teamwork',
  'Leadership',
  'Critical Thinking',
];

function Skills({ data, setData }) {
  const [skills, setSkills] = useState([...data.skills]);
  const createItem = () => {
    setSkills(prevSkills => [...prevSkills, { key: uniqid() }]);
  };
  const deleteItem = index => {
    setSkills(prevSkills => {
      const newSkills = [...prevSkills];
      newSkills.splice(index, 1);
      return newSkills;
    });
  };
  const handleInput = (index, value) => {
    setSkills(prevSkills => {
      const newSkills = [...prevSkills];
      newSkills[index] = { ...newSkills[index], name: value };
      return newSkills;
    });
  };

  useEffect(() => {
    setData(prevData => ({ ...prevData, skills }));
  }, [skills]);

  return (
    <div className="Container">
      {skills.length < maxSkills && (
        <Button
          className="New"
          icon={<RiAddLine />}
          label="New"
          handleClick={createItem}
          alt
        />
      )}
      <form className="Skills">
        {skills.map(({ key }, i) => (
          <div key={key} className="Skill">
            <Input
              id={i}
              placeholder={placeholders[i % placeholders.length]}
              value={skills[i].name}
              handleInput={handleInput}
            />
            <Button
              className="Delete"
              icon={<RiDeleteBin6Line />}
              title="Delete"
              handleClick={() => deleteItem(i)}
              alt
            />
          </div>
        ))}
      </form>
    </div>
  );
}

export default Skills;
