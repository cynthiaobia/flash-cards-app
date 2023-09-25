
import { useState } from 'react';
import {updateUserInfo} from '../utilities/users-api';
import { Link, useNavigate } from 'react-router-dom'

function UpdateInfoForm ({user, setUser}) {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const userFormData = {...formData};
  //   console.log(userFormData);
  //   navigate('/settings');
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserInfo(formData); 
      console.log('User information updated');
      setUser(formData);
      navigate('/settings');
    } catch (err) {
      console.error('Error updating user information:', err);
    }
  }

  return (
    <div>
      <h1>Update Information</h1>

      <form autoComplete='off' onSubmit={handleSubmit}>
          <label>Name</label>
          <input type='text' name='name' value={formData.name} onChange={handleChange} required />
          <br /><br />
          <label>Email</label>
          <input type='email' name='email' value={formData.email} onChange={handleChange} required />
          <br />
          <button type="submit">Submit</button>
          <br />
          <Link to="/settings">Back to Settings</Link>
      </form>
      

    </div>
  )
}

export default UpdateInfoForm;