import './App.css'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import { fetchContacts } from './redux/contactsOps'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { selectError,selectLoading } from './redux/selectors'
function App() {
  const loading=useSelector(selectLoading);
  const error=useSelector(selectError);

  const dispatch=useDispatch();
  useEffect(()=>{
  dispatch(fetchContacts())
  },[dispatch])

  return (
    <>
    <div className='container'>
    <h1>Phonebook</h1>
    <ContactForm/>
    <SearchBox/>
    {loading && <>Loading ,please wait......</>}
    {error && <>Ops, there is an error happend , please try later....;
    </>}
     <ContactList/> 
    </div>
   
    </>
  )
}

export default App
