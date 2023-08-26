import { Link } from "preact-router";
import { useEffect, useState } from "preact/hooks";
import { registrationFetch } from "../core/service/user.service";
export const RegistrationPage = () => {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (event: any) => {
        setemail(event.target.value);
    };

    const onChangePassword = (event: any) => {
        setPassword(event.target.value);
    };

    useEffect(() => {
        console.log("email", email);
        console.log("passwod", password);
    }, [email, password]);

    const onSubmitRegistration = async (event: any) => {
        event.preventDefault();
        console.log("submit");
        const resp = await registrationFetch(email, password);
        console.log("resp", resp);
    };

    return (
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Registration</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" onSubmit={onSubmitRegistration}>
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input onChange={onChangeEmail} id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            </div>
            <div class="mt-2">
              <input onChange={onChangePassword} id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create account</button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <Link href="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Sign in</Link>
        </p>
      </div>
    </div>
    );
};
  