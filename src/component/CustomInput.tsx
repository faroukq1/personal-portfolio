type customInputType = {
  title: string;
  placeholder: string;
};
const CustomInput = ({ title, placeholder }: customInputType) => {
  return (
    <label className="form-control max-w-xs w-full">
      <div className="label">
        <span className="label-text">{title}</span>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
      />
    </label>
  );
};

export default CustomInput;
