import { useDispatch, useSelector } from 'react-redux';
import { selectBookCategories } from '../../store/books/booksSlice';
import { Dropdown } from 'react-bootstrap';
import { setCurrentCategory } from '../../store/books/booksSlice';

const Filters = () => {
  const bookCategories = useSelector(selectBookCategories);
  const dispatch = useDispatch();
  const setCurrentCategoryAction = (category: string): void => {
    dispatch(setCurrentCategory(category));
  }
  const renderItems = (name: string, key: string | number) => {
    return (
      <Dropdown.Item
        eventKey={key}
        key={key}
        onClick={() => setCurrentCategoryAction(name)}>
        {name}
      </Dropdown.Item>);
  }


  return (
    <div>
      <Dropdown show>
        <Dropdown.Menu className="bookFilter">
          <Dropdown.Header>Category</ Dropdown.Header>
          {renderItems('All', -1)}
          {bookCategories.map((categoryName, idx) => renderItems(categoryName, idx))}
          <Dropdown.Divider/>
          <Dropdown.Header>Author</Dropdown.Header>
          <Dropdown.Item>todo</Dropdown.Item>
          <Dropdown.Item>todo</Dropdown.Item>
          <Dropdown.Item>todo</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default Filters;
