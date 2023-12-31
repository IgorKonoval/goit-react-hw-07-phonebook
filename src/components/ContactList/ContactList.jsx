import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import ContactItem from '../ListItem/ListItem';
import { selectVisibleContacts } from '../../redux/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
};
