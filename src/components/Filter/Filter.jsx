import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { selectFilteredContacts } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilteredContacts);
  const handleOnChange = evt => {
    evt.preventDefault();
    dispatch(setFilter(evt.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        name="filter"
        type="text"
        value={filterValue}
        onChange={handleOnChange}
      ></Input>
    </Label>
  );
};

export default Filter;
