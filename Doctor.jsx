import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Doctor() {
  const [doctors, setDoctors] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [salary, setSalary] = useState('');
  const [hospital, setHospital] = useState('');
  const [editId, setEditId] = useState(null);

  const API_URL = 'http://localhost:5000/doctor/api';

 const fetchDoctor = async () => {
  try {
    const res = await axios.get(`${API_URL}/doctor`);
    setDoctors(res.data);
  } catch (err) {
    console.log('Error fetching doctor', err);
  }
};

  useEffect(() => {
    fetchDoctor();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doctorData = {
      name,
      age,
      address,
      salary,
      hospital
    };

    try {
      if (editId) {
        await axios.put(`${API_URL}/doctor/${editId}`, doctorData);
        alert('Doctor updated successfully');
      } else {
        await axios.post(`${API_URL}/doctor`, doctorData);
        alert('Doctor added successfully');
      }
      resetForm();
      fetchDoctor();
    } catch (err) {
      console.error('Error submitting form', err);
    }
  };

  const resetForm = () => {
    setName('');
    setAge('');
    setAddress('');
    setSalary('');
    setHospital('');
    setEditId(null);
  };

  const handleEdit = (doc) => {
    setName(doc.name || '');
    setAge(doc.age || '');
    setAddress(doc.address || '');
    setSalary(doc.salary || '');
    setHospital(doc.hospital || '');
    setEditId(doc._id);
  };

 const handleDelete = async (id) => {
    if (!window.confirm("Delete this doctor?")) return;

    try {
      await axios.delete(`${API_URL}/doctor/${id}`);
      alert("Deleted successfully");
      await fetchDoctor(); 
    } catch (error) {
      console.error("Error deleting doctor:", error);
      alert("Failed to delete doctor"); 
    }
  };


  return (
    <div className="p-6">
    
      <div className='flex justify-center min-h-screen items-center'>
        <div className='text-center shadow-lg py-8 px-8 rounded-lg'>
          <h1 className="text-xl font-bold mb-4">Doctor Form</h1>

          <form onSubmit={handleSubmit} className="space-y-3">

            <div>
              <label>Name</label><br />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>

            <div>
              <label>Age</label><br />
              <input type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="border p-2 rounded w-full"
              />
                
            </div>

            <div>
              <label>Address</label><br />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>

            <div>
              <label>Salary</label><br />
              <input
                type="number"
                placeholder="Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>

            <div>
              <label>Hospital</label><br />
              <input
                type="text"
                placeholder="Hospital"
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>

            <button className='bg-blue-500 px-8 py-2 rounded text-white font-bold hover:bg-blue-900 cursor-pointer'>
              {editId ? "Update Doctor" : "Insert Doctor"}
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Hospital</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((doc) => (
              <tr key={doc._id} className="text-center border-t">
                <td>{doc.name}</td>
                <td>{doc.age}</td>
                <td>{doc.address}</td>
                <td>{doc.salary}</td>
                <td>{doc.hospital}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => handleEdit(doc)} className='bg-green-500 px-4 py-1 rounded text-white hover:bg-green-700'>
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(doc._id)} className='bg-red-500 px-4 py-1 rounded text-white hover:bg-red-700'>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default Doctor;
