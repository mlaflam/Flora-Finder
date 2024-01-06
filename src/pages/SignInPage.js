import '../style.css';
import Navbar from '../components/Navbar';
import ErrorFooter from '../components/ErrorFooter';
import SignInForm from '../components/SignInForm';


function SignInPage() {
  return (

    <div>
      <div className="block-main">
        <Navbar />

        <SignInForm />

          

        <ErrorFooter />

      </div>

    </div>

  );
}

export default SignInPage;
