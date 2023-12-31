import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import Filter from './Filter/Filter';
import {
  Container,
  Section,
  Title,
  SectionTitle,
  Message,
  Block,
} from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader';
import { GlobalStyle } from './GlobalStyle';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';
import AddContact from './AddContact/AddContact';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <Block>
        <AddContact />
        <Section>
          <SectionTitle>Contacts</SectionTitle>
          {contacts.length !== 0 ? (
            <>
              <Filter />
              {isLoading && !error && <Loader />}
              <ContactList />
            </>
          ) : (
            <Message>
              There are no contacts in your phonebook. Please add your first
              contact!
            </Message>
          )}
          <GlobalStyle />
        </Section>
      </Block>
    </Container>
  );
};
