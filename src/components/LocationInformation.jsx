import { useNavigate } from 'react-router-dom';

const LocationInformation = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="w-50 border rounded p-3">
        <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
          <div className="d-flex flex-column">
            <span className="fw-bold fs-5">Location Information</span>
            <span className="mb-2">How best can we find you</span>
          </div>
          <span>3 of 5</span>
        </div>

        {/* Region */}
        <div class="my-3">
          <label for="region" className="form-label">
            Region
          </label>
          <input
            type="text"
            className="form-control"
            id="region"
            placeholder="Central Region"
          />
        </div>

        {/* District */}
        <div class="my-3">
          <label for="district" className="form-label">
            District
          </label>
          <input
            type="text"
            className="form-control"
            id="district"
            placeholder="Kampala"
          />
        </div>

        {/* village */}
        <div class="my-3">
          <label for="village" className="form-label">
            Village
          </label>
          <input
            type="text"
            className="form-control"
            id="village"
            placeholder="Kisaasi Central"
          />
        </div>

        {/* LC Zone */}
        <div class="my-3">
          <label for="lc" className="form-label">
            LC Zone
          </label>
          <input
            type="text"
            className="form-control"
            id="lc"
            placeholder="Ddungu Zone"
          />
        </div>

        {/* Physical Location */}
        <div class="my-3">
          <label for="physicalLocation" className="form-label">
            Physical Location
          </label>
          <input
            type="text"
            className="form-control"
            id="physicalLocation"
            placeholder="Yes"
          />
        </div>

        {/* GPS Cordinates */}
        <div class="my-3">
          <label for="gps" className="form-label">
            GPS Cordinates
          </label>
          <input type="text" className="form-control" id="gps" placeholder="" />
        </div>

        {/* Number of years working in area */}
        <div class="my-3">
          <label for="years" className="form-label">
            Number of years working in area
          </label>
          <input
            type="number"
            className="form-control"
            id="years"
            placeholder="2"
          />
        </div>

        {/* Building Name */}
        <div class="my-3">
          <label for="buildingName" className="form-label">
            Building Name
          </label>
          <input
            type="text"
            className="form-control"
            id="buildingName"
            placeholder="Catherine Complex"
          />
        </div>

        {/* Type of shop */}
        <div class="my-3">
          <label for="type" className="form-label">
            Type of shop
          </label>
          <input
            type="text"
            className="form-control"
            id="type"
            placeholder="Kiosk"
          />
        </div>

        {/* arear */}
        <div>
          <p className="m-0">Area</p>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="area"
              id="urban"
              value="urban"
            />
            <label class="form-check-label" for="inlineRadio1">
              Urban
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="area"
              id="rural"
              value="rural"
            />
            <label class="form-check-label" for="inlineRadio1">
              Rural
            </label>
          </div>
        </div>

        {/* Resident in area */}
        <div class="my-3">
          <label for="resident" className="form-label">
            Resident in Area
          </label>
          <input
            type="text"
            className="form-control"
            id="resident"
            placeholder="Yes"
          />
        </div>

        {/* Owner type */}
        <div class="my-3">
          <label for="ownerType" className="form-label">
            Owner type
          </label>
          <input
            type="text"
            className="form-control"
            id="ownerType"
            placeholder="Rented"
          />
        </div>
        <div>
          <button
            className="btn btn-primary w-25"
            onClick={() => {
              navigate('/self-onboarding/next-of-kin');
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationInformation;
