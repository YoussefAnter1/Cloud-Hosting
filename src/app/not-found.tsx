import Link from "next/link";

const NotfoundPaged = () => {
  return (
    <section className="flex items-center justify-center flex-col fix-height">
      <h1 className="text-7xl text-gray-800 font-bold">404</h1>
      <p className="text-gray-500 text-3xl mt-2 mb-5">Page Not Found</p>
      <Link className="text-xl underline text-blue-700" href="/">
        Go to home page
      </Link>
    </section>
  );
};

export default NotfoundPaged;
