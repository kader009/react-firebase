import { FcGraduationCap } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const GithubLogin = () => {
  const { githubLogin } = useAuth();

  const handleGoogleSignIn = () => {
    githubLogin();
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn w-full">
      <div className="flex items-center gap-2">
        <FcGraduationCap size={24} />
        <p>Google</p>
      </div>
    </button>
  );
};

export default GithubLogin;