import { Button, Col, Form, Image, Spinner } from 'react-bootstrap';
import * as React from 'react';
import { Book } from '../../store/books/booksSlice';

type FormControlProps = {
  name: string;
  label: string;
  value: string;
  type?: string;
}
const FormGroupComponent = ({
                              name,
                              label,
                              type = 'text',
                              value
                            }: FormControlProps) => {
  return <>
    <Form.Group as={Col} className="mb-3" md="6" controlId={'validation' + name}>
      <Form.Label column sm="2">{label}</Form.Label>
      <Form.Control
        type={type}
        value={value}
        readOnly
      />
    </Form.Group>
  </>
}

interface IFormInput {
  _id: string;
  title: string;
  author: string;
  publisher: string;
  importedDate: string;
  location: string;
  category: string;
  isbn: string;
}

type BookFormProps = {
  _id?: string;
  title?: string;
  author?: string;
  publisher?: string;
  importedDate?: string;
  location?: string;
  category?: string;
  isbn?: string;
  errMsg?: string | undefined;
  successMsg?: string | undefined;
  isLoading?: boolean;
  handleFormSubmit: (book: Book) => void;
  onBackClicked: () => void;
}
const BookForm = (props: BookFormProps) => {

  return (
    <>
      <Form>
        <Image src="https://picsum.photos/300/300" className="bookImage"/>
        {/*<FormGroupComponent name={'id'} label={'BookID'} control={control}*/}
        {/*                    value={props.id || ''}*/}
        {/*                    rules={{ required: true }}*/}
        {/*                    readOnly/>*/}
        <FormGroupComponent name={'title'} label={'Title'}
                            value={props.title || ''}/>
        <FormGroupComponent name={'author'} label={'Author'} value={props.author || ''}/>
        <FormGroupComponent name={'publisher'} label={'Publisher'} value={props.publisher || ''}/>
        <FormGroupComponent name={'importedDate'} label={'ImportedDate'}
                            type={'date'}
                            value={props.importedDate || ''}/>
        <FormGroupComponent name={'location'} label={'Location'} value={props.location || ''}/>
        <FormGroupComponent name={'category'} label={'Category'} value={props.category || ''}/>
        <FormGroupComponent name={'isbn'} label={'ISBN'} value={props.isbn || ''}/>
        <Button variant="outline-primary" onClick={props.onBackClicked}>Back</Button>
        {props.errMsg ? <p style={{ color: 'red' }}>{props.errMsg}</p> : ''}
        {props.successMsg ? <p style={{ color: 'green' }}>{props.successMsg}</p> : ''}

      </Form>

    </>
  );
}

export default BookForm;
