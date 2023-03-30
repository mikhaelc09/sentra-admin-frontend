import InputField from "components/fields/InputField";
import Checkbox from "components/checkbox";

export default function SignIn() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      {/* Sign in section */}
      <div className="w-full max-w-full flex-col items-center px-12">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700">
          Login
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Password*"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
        />
        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-between px-2">
          <div className="flex items-center">
            <Checkbox />
            <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
              Keep me logged In
            </p>
          </div>
          <a
            className="text-sm font-medium text-blueSecondary hover:text-brand-600 dark:text-white"
            href=" "
          >
            Forgot Password?
          </a>
        </div>
        <div className="flex w-full justify-center">
          <button className="linear mt-2 w-1/2 rounded-xl bg-blueSecondary py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
