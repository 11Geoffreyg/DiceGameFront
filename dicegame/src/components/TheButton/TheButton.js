import './TheButton.scss';

const TheButton = ({label}) => {
  return (
    <button className="the-button">
      {label}
    </button>
  );
}

export default TheButton;