import { useNavigate } from 'react-router-dom';

const CompanyInformation = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="w-50 border rounded p-3">
        <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
          <div className="d-flex flex-column">
            <span className="fw-bold fs-5">Company Information</span>
            <span className="mb-2">Share the agents contact details</span>
          </div>
          <span>2 of 5</span>
        </div>

        {/* Directors full name */}
        <div class="my-3">
          <label for="director" className="form-label">
            Directors Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="director"
            placeholder="John Doe"
          />
        </div>

        {/* Number of outlets */}
        <div class="my-3">
          <label for="outlets" className="form-label">
            Number of Outlets
          </label>
          <input
            type="number"
            className="form-control"
            id="outlets"
            placeholder="1"
          />
        </div>

        {/* URA TIN */}
        <div class="my-3">
          <label for="tin" className="form-label">
            URA TIN
            <span className="text-muted">(Optional)</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="tin"
            placeholder="1017388839"
          />
        </div>

        {/* nature of business */}
        <div class="mb-3">
          <label for="nature" class="form-label">
            Nature of Business
          </label>
          <textarea
            class="form-control"
            id="nature"
            rows="3"
            placeholder="Small kaduka that sells electronics and runs Quickteller at the same time"
          ></textarea>
        </div>

        <div>
          <button
            className="btn btn-primary w-25"
            onClick={() => {
              navigate('/self-onboarding/location-information');
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
