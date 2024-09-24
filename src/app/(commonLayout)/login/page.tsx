import GoogleLoginBtn from "../components/page/shared/GoogleLoginBtn";

const LoginPage = () => {
  return (
    <>
      <GoogleLoginBtn />
    </>
  );
};

export default LoginPage;

/**
 * Auth - Custom Email Password - Role - USER, ADMIN -> AccessToken
 * Auth - Social Login - Google : Role - USER X
 *
 * Social Login -> Google -> email, name, profile picture -> Amader DataBase - User Register / User Login -> Role - USER -> accessToken
 */
