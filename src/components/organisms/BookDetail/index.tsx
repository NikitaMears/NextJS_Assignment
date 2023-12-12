// BookDetails.tsx
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Book } from "../../../types/Book";

type bookDetailProps = {
  books: Book;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BookDetails = ({ books, open, setOpen }: bookDetailProps) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex items-start justify-between space-x-3">
                  <div className="space-y-1">
                    <Dialog.Title className="text-lg font-semibold leading-6 text-gray-900">
                      Details
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
                        className="h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white px-4 pb-5 sm:px-6">
                <img
                  src={books?.coverImage}
                  className="w-full h-auto object-cover rounded-t-lg"
                  alt={books?.title}
                />
                <h3 className="text-xl font-bold mt-5">{books?.title}</h3>
                <div className="flex items-center justify-between mt-1 mb-3">
                  <p className="font-bold text-red-500">
                    {books?.discountRate} %
                  </p>
                  <p className="font-bold flex items-center">
                    {books?.price} ₩
                  </p>
                </div>
                <p className="text-left">{books?.description}</p>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default BookDetails;
