"use client";
import Link from "next/link";


const ErrorPage = () => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row overflow-hidden">
      {/* Left Section - Error Message */}
      <section className="relative z-10 pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28 w-full md:w-1/2 flex flex-col justify-center items-center">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[530px] text-center">
                <h3 className="mb-4 text-3xl font-bold text-black sm:text-4xl">
                  Sorry, the page can not be found
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The page you were looking for appears to have been moved,
                  deleted or does not exist.
                </p>
                <Link
                  href="/"
                  className="rounded-md bg-primary py-3 px-8 text-base font-bold text-white shadow-signUp duration-300 hover:bg-white hover:text-primary md:px-9 lg:px-8 xl:px-9"
                >
                  Back to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ErrorPage;
