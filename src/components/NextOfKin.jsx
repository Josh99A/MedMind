import { useNavigate } from 'react-router-dom';

const NextOfKin = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="w-50 border rounded p-3">
        <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
          <div className="d-flex flex-column">
            <span className="fw-bold fs-5">Next of Kin</span>
            <span className="mb-2">Provide the Beneficiary Data</span>
          </div>
          <span>4 of 5</span>
        </div>

        {/* NIN */}
        <div class="my-3">
          <label for="nin" className="form-label">
            NIN
            <span className="text-muted">(National Identification Number)</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="nin"
            placeholder="CM939102..."
          />
        </div>

        {/* Name */}
        <div class="my-3">
          <label for="Name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="Name"
            placeholder="John Doe"
          />
        </div>

        {/* Relationship of beneficiary*/}
        <div class="my-3">
          <label for="relationship" className="form-label">
            Relationship of Beneficiary
          </label>
          <input
            type="text"
            className="form-control"
            id="relationship"
            placeholder="ie Wife, Mother etc"
          />
        </div>

        {/* telephone */}
        <div class="my-3">
          <label for="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="+256123456789"
          />
        </div>

        {/* residence */}
        <div class="my-3">
          <label for="residence" className="form-label">
            Residence
          </label>
          <input
            type="text"
            className="form-control"
            id="residence"
            placeholder=""
          />
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

export default NextOfKin;
