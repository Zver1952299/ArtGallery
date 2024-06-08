import iconMinusDark from './iconMinusDark.svg';

function IconMinusDark() {
  return (
    <button
      type="button"
      style={{ backgroundColor: 'transparent', border: 'none' }}
    >
      <img src={iconMinusDark} alt="icon" />
    </button>
  );
}

export default IconMinusDark;
