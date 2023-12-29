import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import ContactItem from '../ListItem/ListItem';
import { getContacts, getFilteredContacts } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filteredContacts = useSelector(getFilteredContacts);

  const getVisibleContacts = () => {
    const filterLowCase = filteredContacts.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowCase)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
};
