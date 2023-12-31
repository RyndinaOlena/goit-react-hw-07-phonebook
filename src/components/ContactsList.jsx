import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/phoneBookReduser';
import { selectContacts, selectFilter } from 'redux/selectors';
import css from './style.module.css'

export default function ContactList() {
    const contacts = useSelector(selectContacts)
    const filter = useSelector(selectFilter)
    const dispatch = useDispatch()
    const handleDelete = (contactId) => {
        dispatch(deleteContacts(contactId))
    }

    const filterContact = contacts !== null && contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    return (
        <div>
            <ul >
                {filterContact && filterContact.map(contact => (<li className={css.list} key={contact.id}>{contact.name} : {contact.number} <button onClick={() => handleDelete(contact.id)}>Delete &times;</button></li>))}
            </ul>
        </div>
    );
}