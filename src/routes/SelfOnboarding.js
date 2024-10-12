import { Outlet } from 'react-router-dom';

const SelfOnboarding = () => {
    return (
      <div className='m-3'>
        <Outlet />
      </div>
    );
};

export default SelfOnboarding;