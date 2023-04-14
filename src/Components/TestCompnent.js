import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function TestCompnent() {
  return (
    <Menu as="div" className="relative inline-block text-left ">
      <div>
        <Menu.Button className="h-6 mb-3 text-sm inline-flex bg-colors-black w-[115px] rounded-full justify-center border  border-gray1   text-blue font-bold ">
          Everyone
          <ChevronDownIcon className="-mr-1  h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10   w-64   h-96  rounded-md  bg-colors-black shadow-sm shadow-colors-slate-300	 ">
          <div className="m-3 space-y-3 ">
            <a href=".#" className="text-lg text-colors-white font-bold ">
              Choose audience
            </a>
            <a className="inline-flex" href=".">
              <div className="h-8 w-8 mr-3 rounded-full bg-colors-slate-50 flex items-center pl-1 ">
                <img className="h-5 w-5 " src="/globe1.png" alt="phot"></img>
              </div>
              <p className="font-bold">Everyone</p>
            </a>

            <p className="font-bold  text-base tracking-normal	">
              My Communities
            </p>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
