import Detail from "./Detail";
import {
  RiGlobalLine,
  RiAtLine,
  RiMapPin2Line,
  RiPhoneLine,
} from 'react-icons/ri';

function Contact({ contact }) {
  const {
    website,
    email,
    location,
    phone,
  } = contact;

  return (
    <section className="Contact">
      <h3>CONTACT</h3>
      <Detail icon={<RiGlobalLine />} label={website} capitalized={false} />
      <Detail icon={<RiAtLine />} label={email} capitalized={false} />
      <Detail icon={<RiMapPin2Line />} label={location} />
      <Detail icon={<RiPhoneLine />} label={phone} capitalized={false} />
    </section>
  );
}

export default Contact;
