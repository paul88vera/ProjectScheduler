/* eslint-disable react/prop-types */
export default function FormGroup({ children, errorMessage }) {
  return (
    <div
      className={`form-group flex flex-row gap-2 ${
        errorMessage != null ? "error" : ""
      }`}>
      {children}
      {errorMessage !== null && (
        <div className="error-message">{errorMessage}</div>
      )}
    </div>
  );
}
