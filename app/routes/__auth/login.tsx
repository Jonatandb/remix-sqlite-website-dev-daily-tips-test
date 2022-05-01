import { Link } from "@remix-run/react";

export default function Login() {
  return <>
    <p className="pb-4">This is the login page</p>

    <Link
      className="rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
      to={{
        pathname: "/register"
      }}
    >
      Register
    </Link>
  </>
}