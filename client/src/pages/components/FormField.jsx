import React from "react";

const FormField = ({
  labelName,
  value,
  type,
  name,
  placeholder,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-grey-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            className="font-semibold text-sm bg-[#ececf1] py-2 px-2 rounded-[5px] text-black"
            onClick={handleSurpriseMe}
            type="button"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-grey-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-[#6469ff] focus:border-[#4649ff] outline-none block w-full p-2"
      />
    </div>
  );
};

export default FormField;
