import { useState } from "react";
import "./Input.css";

const Input = ({ label, placeholder }) => {
    const [value, setValue] = useState("");

    return (
        <div className="input-container">
            {label && <label className="input-label">{label}</label>}
            <input
                className="custom-input"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
};

export default Input;