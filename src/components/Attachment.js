import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { NormalSpinner } from './SpinnerComponents';

import { createUploadData, uploadFile } from '../helper/requests';

export default function Attachment({ attach, description, name }) {
  const [file, setFile] = useState(null);
  const[isLoading, setIsLoading]= useState(false)
  const [fileSizeLimitMessage, setFileSizeLimitMessage] = useState('');
  const [uploadErrorMessage, setUploadErrorMessage] = useState('');

  const maxFileSize = 5 * 1024 * 1024;

  const formData = useSelector((store) => store.kyc.formData);

  const handleChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && selectedFile.size > maxFileSize) {
      setFileSizeLimitMessage('Please upload a file smaller than 5 MB');
      return;
    }

    setFile(selectedFile);
  };

  useEffect(() => {
    if (!file) {
      return;
    }

    let fileInfo = createUploadData(formData, file, name);

    uploadFile(fileInfo, setIsLoading, setUploadErrorMessage);
  }, [file, formData, name]);

  return (
    <div className="d-flex flex-column mb-3">
      <div className="mx-2">
        <p>
          <span className="fw-bold">{attach}</span>
          <br />
          <span className="text-muted fw-light fs-small">
            A scanned copy of your {attach} {description}
          </span>
          <br />
          <span className="text-muted fs-x-small">PDF file less than 5 MB</span>
        </p>
        <div className="d-flex justify-content-between ">
          <input
            type="file"
            className="form-control col-md-10"
            name={name}
            accept=".pdf"
            onChange={handleChange}
          />
          {isLoading ? <NormalSpinner className="col-mg-2" size='sm' /> : null}
        </div>
        {fileSizeLimitMessage ? (
          <p className="alert alert-warning my-2 py-1">
            {fileSizeLimitMessage}
          </p>
        ) : null}

{uploadErrorMessage ? (
          <p className="alert alert-danger my-2 py-1">
            {uploadErrorMessage}
          </p>
        ) : null}
      </div>
    </div>
  );
}
