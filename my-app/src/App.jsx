import { useState } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {toast} from 'react-toastify'
function App() {
  const [formdata, setformdata] = useState({
    myname: '',
    uemail: '',
    uphone: '',
    message: ''
  });

  const [userdata, currentusrdata] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const getvalue = (event) => {
    const { name, value } = event.target;
    setformdata(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlesubmit = (event) => {
    event.preventDefault();

    // Check if email or phone number already exists
    const check = userdata.filter((v) => {
      return v.uemail === formdata.uemail || v.uphone === formdata.uphone;
    });

    if (check.length > 0) {
      toast.error("Email and phone number already exist")
      setErrorMessage("Sorry! Email and phone number already exist.");
      return;
    }

    const currentformdata = {
      uname: formdata.myname,
      uemail: formdata.uemail,
      uphone: formdata.uphone,
      message: formdata.message
    };

    const olduserdata = [...userdata, currentformdata];
    console.log(olduserdata);
    currentusrdata(olduserdata);
    setformdata({
      myname: '',
      uemail: '',
      uphone: '',
      message: ''
    });
    setErrorMessage('');  // Clear error message after successful submission
  };

  let deltetrow = (indexnumber)=>{
    let filterdata =userdata.filter((v,i)=>{
      i!= indexnumber
    })
    currentusrdata(filterdata)
    toast.success("the file was delete succesfully !")
    
  }
  const updaterow = (indexnum)=>{
    // toast.success(index)
    const edit = userdata.filter((v,i)=> i==indexnum)
  edit['index'] = indexnum;
 setformdata(edit)
  }
  return (
    <div className='flexes'>
      <ToastContainer/>
      <form className='forms' onSubmit={handlesubmit}>
        <div className='first-input'>
          <label>Name</label>
          <input
            value={formdata.myname}
            type='text'
            name='myname'
            onChange={getvalue}
          />
        </div>

        <div className='first-input'>
          <label>Email</label>
          <input
            value={formdata.uemail}
            type='text'
            onChange={getvalue}
            name='uemail'
          />
        </div>

        <div className='first-input'>
          <label>Phone</label>
          <input
            value={formdata.uphone}
            type='text'
            name='uphone'
            onChange={getvalue}
          />
        </div>

        <div className='first-input'>
          <label>Message</label>
          <textarea
            className='form-control'
            value={formdata.message}
            name='message'
            onChange={getvalue}
          />
        </div>
        <button className='btn' type="submit">
          {formdata.index !== '' ? "save" : 'update'}
        </button>
        {errorMessage && <div className='error-message'>{errorMessage}</div>}
      </form>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Message</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userdata.length > 0 ?
            userdata.map((obj, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{obj.uname}</td>
                  <td>{obj.uemail}</td>
                  <td>{obj.uphone}</td>
                  <td>{obj.message}</td>
                  <td><button onClick={()=>deltetrow(i)}>Delete</button> <button onClick={()=>updaterow(i)}>Edit</button></td>
                </tr>
              )
            })
            :
            <tr>
              <td colSpan="6">Userdata not found</td>
            </tr>
          }
        </tbody>
      </table>
    </div >
  );
}

export default App;
