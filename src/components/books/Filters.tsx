import { useSelector } from 'react-redux';
import { selectBookCategories } from '../../store/books/booksSlice';
import { Dropdown } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

// import { useMediaQuery } from 'react-responsive';

const Filters = () => {
  // const isDesktopOrLaptop = useMediaQuery()
  const bookCategories = useSelector(selectBookCategories);
  const link = (name: string, key: string | number) => {
    return (<Dropdown.Item eventKey={key} key={key}>{name}</Dropdown.Item>);
  }
  return (
    <Dropdown>
      <Dropdown.Menu show className='booksFilter'>
        <Dropdown.Header>Category</Dropdown.Header>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Filters;
