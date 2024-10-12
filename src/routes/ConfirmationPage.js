import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { NormalSpinner } from '../components/SpinnerComponents';
import { LogoNavbar } from '../components/Nav';

import { checkToken } from '../helper/token';
import { updateCurrentUser } from '../store/slices/user';

function ConfirmationPage(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [token, setToken] = useState('');
  const [savedToken, setSavedToken] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const paramsToken = searchParams.get('token');
    setToken(paramsToken);

    const userToken = JSON.parse(localStorage.getItem('userToken'));
    setSavedToken(userToken.token);
    setUserEmail(userToken.email);
  }, [location.search, token]);

  useEffect(() => {
    if (token && savedToken) {
      const isValid = checkToken(token, savedToken);

      if (isValid) {
        const userData = { email: userEmail, isAuthenticated: true };
        dispatch(updateCurrentUser(userData));

        navigate('/dashboard');
      } else {
        navigate('/login')
      }
    }
  }, [dispatch, navigate, savedToken, token, userEmail]);

  return (
    <>
      <LogoNavbar />
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <NormalSpinner size="lg" />
      </div>
    </>
  );
}

export default ConfirmationPage;
