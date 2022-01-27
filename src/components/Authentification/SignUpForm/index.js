const SignUpForm = () => {
  <form autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
    <input
      name="email"
      type="text"
      value={email}
      placeholder="Email"
      onChange={(event) => {
        const newValue = event.target.value;
        setEmailValue(newValue);
      }}
    />
    <input
      name="password"
      type="password"
      placeholder="Mot de passe"
      onChange={(event) => {
        const newValue = event.target.value;
        setPasswordValue(newValue);
      }}
      value={password}
    />
    <button
      type="submit"
      className="login-form-button"
    >
      Valider
    </button>
  </form>;
};

export default SignUpForm;
