import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Book } from "../../../types/Book";

type bookDetailProps={
 books:Book,
 open:boolean,
 setOpen:React.Dispatch<React.SetStateAction<boolean>>

}
const BookDetails = ({ books, open, setOpen }:bookDetailProps) => {
    console.log(books)
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-4xl">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1">
                      <div className="overflow-hidden bg-roadBlue shadow">
                        <div className="px-4 py-5 sm:px-6">
                          <div className="flex items-start justify-between space-x-3">
                            <div className="space-y-1">
                              <Dialog.Title className="text-lg font-semibold leading-6 text-white mt-5">
                                books
                                <p className="mt-1 max-w-2xl text-sm text-white font-medium">
                                  books detail information
                                </p>
                              </Dialog.Title>
                            </div>
                            <div className="flex h-7 items-center">
                              <button
                                type="button"
                                className="text-gray-400 hover:text-gray-500"
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-6 w-6 text-white"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                        <div className="border-t border-gray-300">
                          <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6 border-1 border-gray-100">
                            <div>
                              <p className="whitespace-nowrap font-semibold text-gray-700">
                                books Details
                              </p>
                            </div>
                            <h1>{books?.title}</h1>
      <img src={books?.coverImage} alt={books?.title} className="w-full h-auto" />
        {/* </Link> */}
          <h3 className="text-xl font-bold">{books?.title}</h3>
      <p>Discount rate: {books?.discountRate}</p>
      <p>Price: {books?.price}</p>
                          </div>
                        </div>
                     
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default BookDetails;