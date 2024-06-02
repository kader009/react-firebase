import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleSignIn = () => {
    const token = localStorage.getItem('token')
    console.log(token);
    googleLogin().then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
        };
        fetch(`http://localhost:5000/user`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            'authorization': `Bearer ${token}`
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem('token', data?.token);
          });
      }
    });
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn w-full">
      <div className="flex items-center gap-2">
        <FcGoogle size={24} />
        <p>Google</p>
      </div>
    </button>
  );
};

export default GoogleLogin;
