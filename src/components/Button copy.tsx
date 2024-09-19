// components/Button.js
function Button({children, className = '', onClick, ...props}: any) {
  return (
    <button
      className={`rounded-full bg-white px-4 py-2 font-semibold hover:bg-[#b2ac9c7d] ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
