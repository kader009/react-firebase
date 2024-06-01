import { FcGraduationCap } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';

const GithubLogin = () => {
  const { githubLogin } = useAuth();

  const handleGoogleSignIn = () => {
    githubLogin().then(data =>{
      console.log(data);
    });
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn w-full">
      <div className="flex items-center gap-2">
        <FcGraduationCap size={24} />
        <p>Github</p>
      </div>
    </button>
  );
};

export default GithubLogin;
