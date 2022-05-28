import { faker } from '@faker-js/faker';
import uniqid from 'uniqid';

function generateData() {
  const data = {
    info: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      professionalTitle: 'Senior Software Engineer',
      profile: faker.lorem.paragraphs(2),
    },
    contact: {
      location: faker.address.city(),
      phone: '555-555-5555',
    },
    education: [
      {
        degree: 'Master of Science',
        university: 'University of California, Berkeley',
        from: '2014',
        to: '2017',
      },
      {
        degree: 'Bachelor of Science',
        university: 'University of California, Berkeley',
        from: '2010',
        to: '2014',
      },
    ],
    work: [
      {
        title: 'Software Engineer',
        company: 'Google',
        from: '2020',
        to: 'Present',
        description: faker.lorem.paragraphs(1),
      },
      {
        title: 'Full Stack Developer',
        company: 'Microsoft',
        from: '2018',
        to: '2020',
        description: faker.lorem.paragraphs(1),
      },
    ],
    skills: [
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Redux' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'MongoDB' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Git' },
    ],
  };
  const fullName = `${data.info.firstName}${data.info.lastName}`.toLowerCase();
  data.contact.website = `${fullName}.com`;
  data.contact.email = `${fullName}@email.com`;

  [
    ...data.education,
    ...data.work,
    ...data.skills,
  ].forEach(item => item.key = uniqid());

  return data;
}

export default generateData;
