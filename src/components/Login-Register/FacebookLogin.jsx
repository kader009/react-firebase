import { FcFactoryBreakdown } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';

const FacebookLogin = () => {
  const { facebookLogin } = useAuth();

  const handleFacebookSignIn = () => {
    facebookLogin();
  };

  return (
    <button onClick={handleFacebookSignIn} className="btn w-full">
      <div className="flex items-center gap-2">
        <FcFactoryBreakdown size={24} />
        <p>Facebook</p>
      </div>
    </button>
  );
};

export default FacebookLogin;
