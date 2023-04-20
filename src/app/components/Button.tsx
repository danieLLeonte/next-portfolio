const Button = ({ style }: { style?: string }) => {
  return (
    <button
      type="button"
      className={`${style} bg-primary text-white font-bold text-sm py-5 px-11 rounded-full shadow-primary/50 shadow-md`}
    >
      Contact Me
    </button>
  );
};

export default Button;
