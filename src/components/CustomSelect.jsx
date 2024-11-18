import React, { useEffect, useState } from "react";

function CustomSelect({ key_name, label, values = [], onChange, className = '' }) {
  console.log('values:=>', values);
  const [value, setValue] = useState(label)
  console.log('v', value);

  const handleOnChnage = (e) => {
    const val = e.target.value;
    onChange(e, key_name)
    setValue(`${String(val)?.charAt(0).toUpperCase() + String(val)?.slice(1)}`)
  }
  
  return (
    <div>
      {/* {label && <label htmlFor="sorting" className="block text-gray-700 mb-2">{label}</label>} */}
      <select
        id="sorting"
        value={value} // Controlled component: `sortBy` is the state passed to this component
        onChange={handleOnChnage} // onChange will trigger the parent handler with key
        className={`font-bold px-2 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 ${className}`}
      >
        <option className="font-semibold" key={key_name} value={""}>{label}</option>
        {values?.map((ele, index) => (
          <option key={index} value={ele}>
            {String(ele)?.charAt(0).toUpperCase() + String(ele)?.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CustomSelect;
