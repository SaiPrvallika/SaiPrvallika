import React, { useState } from 'react';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        username: '', // Replaced firstName with username
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [registeredUsername, setRegisteredUsername] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === 'confirmPassword') {
            setConfirmPasswordError(value !== formData.password);
        } else {
            setConfirmPasswordError(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setConfirmPasswordError(true);
            return;
        }
        // Validation logic and form submission
        setRegisteredUsername(formData.username); // Changed from firstName to username
        setShowPopup(true);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="App">
            <fieldset className="form-box">
                <legend>Registration Form</legend>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="username" 
                            placeholder="Username" 
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <span className="eye-icon" onClick={togglePasswordVisibility}>
                            {showPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                        </span>
                    </div>
                    <div className="form-group">
                  <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <span className="eye-icon" onClick={toggleConfirmPasswordVisibility}>
                            {showConfirmPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                        </span>
                        {confirmPasswordError && <p className="error-message">Passwords do not match</p>}
                    </div>
                    <div className="form-group">
                        <label><input
                                type="checkbox"
                                name="acceptTerms"
                                checked={formData.acceptTerms}
                                onChange={handleChange}
                                required/>I accept the terms and conditions
                        </label>
                    </div>
                    <button type="submit">
                          Submit</button>
                </form>
            </fieldset>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Registration Successful!</h2>
                        <p>Your account has been successfully registered, {registeredUsername}!</p>
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default App;

