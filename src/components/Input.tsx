import React from "react";

type Props = {
  label: string;
  placeholder: string;
  stateSetter: (value: string) => void;
  state: string;
};

const Input = (props: Props) => {
  const { label, placeholder, stateSetter, state } = props;

  return (
    <div className="form-control w-full max-w-xs mb-3">
      <label className="label">
        <span className="label-text">{label}:</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
        value={state}
        onChange={(e) => stateSetter(e.target.value)}
      />
    </div>
  );
};

export default Input;
