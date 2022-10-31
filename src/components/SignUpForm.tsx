import { Field, Formik, useField } from "formik";

const FormInput = ({ ...props }) => {
  const [field, meta, helpers] = useField({ name: props.name });

  return (
    <div className="relative text=[#262626] bg-[#FAFAFA] mb-2">
      <label htmlFor="password" className="flex h-[36px] ">
        <span className={`formspan ${field.value && "trans"}`}>
          {props.name}
        </span>
        <input
          className={`bg-[#FAFAFA] border rounded-sm ${
            field.value ? "pt-[14px]" : "pt-[9px]"
          }  pb-[7px] pl-[7px] text-[12px] w-full h-full mb-2 focus:outline focus:outline-[#8e8e8e] `}
          {...field}
          {...props}
        />
      </label>
    </div>
  );
};

export default function SignUpForm() {
  return (
    <Formik
      initialValues={{ email: "", fullname: "", username: "", password: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <form className="w-full" onSubmit={props.handleSubmit}>
          <FormInput name="email" type="email" />
          <FormInput name="fullname" type="text" />
          <FormInput name="username" type="text" />
          <FormInput name="password" type="password" />

          <div className="text-[12px] text-[#8e8e8e] text-center my-4 mx-2">
            <p className="mb-3 ">
              People who use our service may have uploaded your contact
              information to Instagram. Learn More
            </p>
            <p className="">
              By signing up, you agree to our Terms , Privacy Policy and Cookies
              Policy .
            </p>
          </div>

          <button
            className="bg-[#0095f6] w-full text-white p-1.5 rounded text-[14px] font-semibold mb-3"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      )}
    </Formik>
  );
}
