import React, { useState } from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { db } from '../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

const Search = () => {
  // State to hold form input values
  const [formValues, setFormValues] = useState({
    destination: 'Jibhi-Kasol',
    checkIn: '',
    checkOut: '',
    userName: '',
    mobileNumber: '',
    numberOfPeople: 1,
  });

  const [message, setMessage] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Check if all required fields are filled
  const areAllFieldsFilled = () => {
    const { checkIn, checkOut, userName, mobileNumber, numberOfPeople } = formValues;
    return checkIn && checkOut && userName && mobileNumber && numberOfPeople > 0;
  };

  // Submit form data to Firebase
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!areAllFieldsFilled()) {
      setMessage('Please fill out all fields completely.');
      return;
    }

    try {
      await addDoc(collection(db, 'bookings'), formValues);
      setMessage('Booking successfully submitted.');
    } catch (error) {
      console.error('Error submitting booking data:', error);
      setMessage('There was an error submitting the booking.');
    }
  };

  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className="py-4">
            Come experience the very pinnacle of luxury Caribbean all-inclusive vacations for couples at BEACHES Resorts. Our luxury beach resorts, set along the most gorgeous tropical settings and exquisite beaches in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados, and Curaçao, feature unlimited gourmet dining, unique bars serving premium liquors and wines, and every land and water sport, including complimentary green fees at our golf resorts and certified scuba diving at most resorts. If you are planning a wedding, BEACHES is the leader in Caribbean destination weddings and honeymoon packages.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border text-center">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select
              name="destination"
              className="border rounded-md p-2"
              value={formValues.destination}
              onChange={handleInputChange}
            >
              <option>Jibhi-Kasol</option>
              <option>Sar Pass Trek</option>
              <option>Hampta Pass Trek</option>
              <option>Dayara Bugyal Trek</option>
            </select>
          </div>

          <div className="flex flex-col my-4">
            <label>User Name</label>
            <input
              type="text"
              name="userName"
              className="border rounded-md p-2"
              value={formValues.userName}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col my-4">
            <label>Mobile Number</label>
              <input
              type="text"
              name="mobileNumber"
              className="border rounded-md p-2"
              value={formValues.mobileNumber}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col my-2">
            <label>Number of People</label>
            <input
              type="number"
              name="numberOfPeople"
              className="border rounded-md p-2"
              value={formValues.numberOfPeople}
              onChange={handleInputChange}
              min={1}
            />
          </div>

          <div class="flex flex-col my-4">
            <label>Check-In</label>
            <input
              type="date"
              name="checkIn"
              className="border rounded-md p-2"
              value={formValues.checkIn}
              onChange={handleInputChange}
            />
          </div>

          <div class="flex flex-col my-2">
            <label>Check-Out</label>
              <input
              type="date"
              name="checkOut"
              className="border rounded-md p-2"
              value={formValues.checkOut}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="w-full my-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
            Submit Booking
          </button>
        </form>

        {/* Fixed height message area */}
        <div className="min-h-[40px] text-center mt-4">
          {message && <p className="text-red-600">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Search;
