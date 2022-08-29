import './DisplayStep.scss';

function DisplayStep() {
  return (
    <div className="display-step-container">
      <div className="step-container">
        <div className="step">1</div>
        <div className="step-text">Datos</div>
      </div>
      <div className="vertical-line">
        <hr />
      </div>
      <div className="step-container">
        <div className="current-step">2</div>
        <div>Arma tu plan</div>
      </div>
    </div>
  );
}

export default DisplayStep;
