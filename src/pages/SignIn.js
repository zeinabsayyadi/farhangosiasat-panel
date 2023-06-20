import SignInForm from "../form/admin/SignIn";

const SignIn = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: "inherit",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignInForm />
    </div>
  );
};

export default SignIn;
