import axios from 'axios';

import { encryptToken, makeToken, storeToken } from './token';

const baseURL = 'https://paypointt.azurewebsites.net';
const baseAPIURL = 'https://paypointt.azurewebsites.net/api';

const postApplication = async (data) => {
  console.log('Submit button clicked');
  try {
  console.log('In try');

    if (data) {
  console.log('Checking for data and proceeding to request');

      const res = await axios.post(
        'https://paypointt.azurewebsites.net/AgentFile/CreateApplication',
        // `${baseAPIURL}/AgentApplic/CreateApplication`,
        data,
        {
          // headers: {
          //   'Content-Type': 'application/json',
          // },
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            // 'Access-Control-Allow-Headers':
            //   'append,delete,entries,foreach,get,has,keys,set,values,Authorization',
            // Origin: baseURL,
          },
        }
      );

      let statusCode = res.data.code || res.data.Code;
      if (statusCode === '9000') {
  console.log('In if statement after request sent');

        alert('Submitted');
        console.log(res.data);
      } else {
        alert('Failed. Try Again');
        console.log(res.data);
      }
    }
  } catch (error) {
    console.error(error.response);
    alert('Failed. Try Again');
  }
};

const uploadFile = async (formData, setIsLoading, setUploadErrorMessage) => {
  setIsLoading(true);
  try {
    const res = await axios.post(
      `${baseURL}/AgentFile/uploadApplicationAttachment`,
      formData,
      {
        headers: {
          Accept: '*/*',
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    let resCode = res.data.code || res.data.Code;
    if (resCode === '9000') {
      setIsLoading(false);
    } else {
      console.log(res.data);
      setIsLoading(false);
      setUploadErrorMessage('Error uploading document. Please try again');
    }
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
    setUploadErrorMessage('Error uploading document. Please try again');
    console.error(error);
  }
};

const createUploadData = (fileData, file, fileName) => {
  const Region = fileData.Region;
  const BranchName = fileData.BranchName;
  const AgentName = fileData.AgentName;
  const TempUseSessionId = fileData.TempUseSessionId;
  const InstCode = fileData.InstitutionCode;
  const UploadedBy = '';
  const UserId = fileData.PersonResponsible;

  const data = new FormData();

  data.append(fileName, file);
  data.append('Region', Region);
  data.append('BranchName', BranchName);
  data.append('AgentName', AgentName);
  data.append('TempUseSessionId', TempUseSessionId);
  data.append('InstCode', InstCode);
  data.append('UserId', UserId);
  data.append('UploadedBy', UploadedBy);

  return data;
};

const sendRedirectEmail = async (data, navigate) => {
  const token = makeToken(data);
  console.log(data)
  const hashedToken = encryptToken(token);
  storeToken(data, hashedToken);

  const baseAppURL = window.location.origin;

  const redirectUrl = `${baseAppURL}/confirmation?token=${token}`;

  const emailBody = `Dear Partner,\nWe are excited to have you on board!\nClick the link below to upload your KYCs.\n\nRedirect URL: ${redirectUrl}`;

  try {
    const res = await axios.post(
      ``,
      null,
      {
        params: {
          email: data,
          subject: 'Welcome Aboard',
          body: emailBody,
        },
        headers: { Accept: '*/*' },
      }
    );

    console.log(res.config);

    navigate('/post-signup');
  } catch (error) {
    alert('An error ');
    console.error(error);
  }
};

export { uploadFile, createUploadData, sendRedirectEmail, postApplication };
