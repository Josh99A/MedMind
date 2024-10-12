import { useNavigate } from 'react-router-dom';

const ContactInformation = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="w-50 border rounded p-3">
        <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
          <div className="d-flex flex-column">
            <span className="fw-bold fs-5">Contact Information</span>
            <span className="mb-2">Share the agents contact details</span>
          </div>
          <span>1 of 5</span>
        </div>

        {/* gender */}
        <div>
          <p className="m-0">Gender</p>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="female"
            />
            <label class="form-check-label" for="inlineRadio1">
              Female
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
            />
            <label class="form-check-label" for="inlineRadio1">
              Male
            </label>
          </div>
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

        {/* agent full name */}
        <div class="my-3">
          <label for="name" className="form-label">
            Agent Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="John Doe"
          />
        </div>

        {/* date of birth */}
        <div class="my-3">
          <label for="date" className="form-label">
            Date of Birth
          </label>
          <input type="date" className="form-control" id="date" />
        </div>

        {/* telephone */}
        <div class="my-3">
          <label for="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="+256123456789"
          />
        </div>

        {/* email */}
        <div class="my-3">
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>

        <div>
          <button
            className="btn btn-primary w-25"
            onClick={() => {
              navigate('/self-onboarding/company-information');
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
