import { useState } from 'react';
import './App.css';

export default function MyApp() {
  // Store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Store error messages
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form data
  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 5) {
      newErrors.name = 'Name must be at least 5 characters';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name must contain only letters and spaces';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-z0-9]+([.-_]*[a-z0-9]+)*@[a-z0-9-]+(\.[a-z]{2,})+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (formData.password.length > 16) {
      newErrors.password = 'Password must not exceed 16 characters';
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one capital letter';
    } else if (!/\d/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one number';
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one special character';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted');
    }
  };

  return (
    <div>
      <h3>React Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Name: <span className="mandatory">*</span></label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={errors.name ? 'error-input' : ''}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="input-container">
          <label>Email: <span className="mandatory">*</span></label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={errors.email ? 'error-input' : ''}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input-container">
          <label>Password: <span className="mandatory">*</span></label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className={errors.password ? 'error-input' : ''}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}