import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SignInForm from "./SignInForm";

{
  /* For routing: Just change the href below */
}
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact Us", href: "/contact-us" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar(props) {
  // const to set the state of the review form
  const [showSignInForm, setshowSignInForm] = React.useState(false);

  // function to display the review form
  function displaySignInForm() {
    setshowSignInForm(!showSignInForm);
  }

  return (
    <Disclosure as="nav" className="bg-background border-b-2 border-dark-green font-Roboto">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 text-jetBlack" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 text-jetBlack" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex items-center md:mr-auto ">
                  <p className="font-NotoSerif text-2xl text-jetBlack">BetterKFUPM</p>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.name == props.name ? " text-mid-green" : "text-jetBlack hover:text-mid-green",
                          "px-3 py-2 text-md "
                        )}
                        aria-current={item.name == props.name ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className=" inset-y-0 right-0 mdflex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Add onclick handler for routing purposes */}
                <button
                  onClick={displaySignInForm}
                  className="rounded-lg bg-mid-green py-2 px-5 text-white font-Montserrat hover:bg-dark-green active:translate-y-1"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* if showReviewForm is true, then show the ReviewForm component */}
          {showSignInForm ? <SignInForm /> : null}

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.name == props.name ? " text-mid-green" : "text-jetBlack hover:text-mid-green",
                    "px-3 py-2 text-md "
                  )}
                  aria-current={item.name == props.name ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
