// import { useState } from 'react'
// import './App.css'

// function App() {

//   const [formdata, setformdata] = useState({
//     myname: '',
//     uemail: '',
//     uphone: '',
//     message: ''

//   })

//   let getvalaue = (event) => {
//     let olddata = { ...formdata }
//     let inputName = event.target.name
//     let InputValue = event.target.value
//     olddata[inputName] = InputValue
//     setformdata(olddata)
  
//   }

//   const [userdata, currentusrdata] = useState([])

//   let handlesubit = (event) => {
//     event.preventDefault()


//     let currentfromdata = {
//       uname: formdata.uname,
//       uemail: formdata.uemail,
//       uphone: formdata.uphone,
//       message: formdata.message
//     }

//     let olduserdata = [...userdata, currentfromdata]
//     console.log(olduserdata);
//     currentusrdata(olduserdata)
//     setformdata({
//       myname: '',
//       uemail: '',
//       uphone: '',
//       message: ''

//     })



//   }

//   return (
//     <div className='flexes'>
//       <form className='forms' onSubmit={handlesubit} >


//         <div className='first-input'>
//           <label>Name</label>
//           <input
//             value={formdata.myname}
//             type='text'
//             name='myname'
//             onChange={getvalaue}

//           />
//         </div>

//         <div className='first-input'>
//           <label>Email</label>
//           <input
//             value={formdata.uemail}
//             type='text'
//             onChange={getvalaue}
//             name='uemail'
//           />
//         </div>

//         <div className='first-input'>
//           <label>Phone</label>
//           <input
//             value={formdata.uphone}
//             type='text'
//             name='uphone'
//             onChange={getvalaue}

//           />
//         </div>

//         <div className='first-input'>
//           <label>Message</label>
//           <textarea

//             className='form-control'
//             value={formdata.message}
//             name='message'
//             onChange={getvalaue}


//           />
//         </div>
//         <button
//           className='btn'>
// Sve        </button>

//       </form>
//       <table class="table">
//         <thead>
//           <tr>
//             <th scope="col">Id</th>
//             <th scope="col">Name</th>
//             <th scope="col">Email</th>
//             <th scope="col">Phone</th>
//             <th scope="col">Message</th>
//             <th scope="col">Action</th>
//           </tr>
//         </thead>
//         {userdata.length > 1 ?

//           userdata.map((obj, i) => {
//             return (
//               <tr key={i}>
//                 <th scope="row">{i +1}</th>
//                 <td>{obj.uname}</td>
//                 <td>{obj.uemail}</td>
//                 <td>{obj.uphone}</td>
//                 <td>{obj.message}</td>
//                 <td><button>Delete</button> and <button>Edit</button></td>
//               </tr>
//             )
//           })
          
//       :
//       <tr>
//         Userdata not found
//       </tr>



// }

//     </table>
//     </div >
//   )
// }

// export default App

import { useState } from 'react'
import './App.css'

function App() {

  const [formdata, setformdata] = useState({
    myname: '',
    uemail: '',
    uphone: '',
    message: ''
  });

  const [userdata, currentusrdata] = useState([]);

  let getvalue = (event) => {
    let inputName = event.target.name;
    let InputValue = event.target.value;
    setformdata(prevData => ({
      ...prevData,
      [inputName]: InputValue
    }));
  };

  let handlesubmit = (event) => {
    event.preventDefault();

    // Check if email or phone number already exists
    let check = userdata.filter((v) => {
      return v.uemail === formdata.uemail || v.uphone === formdata.uphone;
    });

    if (check.length > 0) {
      let elert = "Sorry ! phone number and email already Exist"
      return;
    }

    let currentformdata = {
      uname: formdata.myname,
      uemail: formdata.uemail,
      uphone: formdata.uphone,
      message: formdata.message
    };

    let olduserdata = [...userdata, currentformdata];
    console.log(olduserdata);
    currentusrdata(olduserdata);
    setformdata({
      myname: '',
      uemail: '',
      uphone: '',
      message: ''
    });
  };

  return (
    <div className='flexes'>
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
        <button className='btn'>
          {formdata.index !== '' ? "save" : 'update'}

        </button>
        
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
                  <td><button>Delete</button> <button>Edit</button></td>
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
  )
}

export default App;
