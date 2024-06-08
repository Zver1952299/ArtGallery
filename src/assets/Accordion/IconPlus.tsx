import iconPlusDark from './iconPlusDark.svg';

function IconPlusDark() {
  return (
    <button
      type="button"
      style={{ backgroundColor: 'transparent', border: 'none' }}
    >
      <img src={iconPlusDark} alt="icon" />
    </button>
  );
}

export default IconPlusDark;
