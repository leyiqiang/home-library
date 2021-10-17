import { useSelector } from 'react-redux';
import { selectBookCategories } from '../../store/books/booksSlice';
import { ListGroup } from 'react-bootstrap';
// import { useMediaQuery } from 'react-responsive';

const Filters = () => {
  // const isDesktopOrLaptop = useMediaQuery()
  const bookCategories = useSelector(selectBookCategories);
  const link = (name: string, key: string | number) => {
    return (<p key={key}>{name}</p>);
  }
  return (
    <div>
      <ListGroup defaultActiveKey="/home" className="booksCategory">
        <p className='filterTypes'>Category</p>
        {bookCategories.map((c, idx) => link(c , idx))}
        <hr/>
        <p className='filterTypes'>Author</p>
        <p>todo</p>
        <p>todo</p>
        <p>todo</p>
      </ListGroup>
    </div>
  )
}

export default Filters;
