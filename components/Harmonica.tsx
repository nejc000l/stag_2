import { Disclosure, Transition } from "@headlessui/react";
import React from "react";

export default function Harmonica() {
  return (
    <>
      <div className="w-full overflow-scroll flex md:flex-row flex-col justify-evenly h-[30vh]">
        <div className=" ">
          <Disclosure>
            <Disclosure.Button className="p-4 m-4 mainColorLight text-[12px]  md:text-lg ">
              Leto 2017
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel>
                <ul>
                  <li className="p-4 text-justify text-[9px] flex-wrap md:text-[14px]">
                    V letu 2017 je bilo v Evropi prijavljenih 4.002 pojavov APK
                    pri divjih prašičih in 265 pojavov pri domačih prašičih.
                  </li>
                </ul>
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
        </div>

        <div className="">
          <Disclosure>
            <Disclosure.Button className="p-4 m-4 mainColorLight text-[12px]  md:text-lg">
              Leto 2018
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel>
                <ul>
                  <li className="p-4 text-justify text-[9px] flex-wrap md:text-[14px]">
                    V letu 2018 je bilo v Evropi prijavljenih 5.429 pojavov APK
                    pri divjih prašičih in 1.465 pojavov pri domačih prašičih.
                  </li>
                </ul>
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
        </div>
        <div className="  ">
          <Disclosure>
            <Disclosure.Button className="p-4 m-4 mainColorLight text-[12px] md:text-lg ">
              Leto 2019
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel>
                <ul>
                  <li className="p-4 text-justify text-[9px] flex-wrap md:text-[14px]">
                    V letu 2019 je bilo v Evropi prijavljenih 6.456 pojavov APK
                    pri divjih prašičih in 1.912 pojavov pri domačih prašičih.
                  </li>
                </ul>
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
        </div>
        <div className=" ">
          <Disclosure>
            <Disclosure.Button className="p-4 m-4 mainColorLight text-[12px] md:text-lg ">
              Leto 2020
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel>
                <ul>
                  <li className="p-4 text-justify text-[9px] flex-wrap md:text-[14px]">
                    V letu 2020 je bilo v Evropi prijavljenih 11.208 pojavov APK
                    pri divjih prašičih in 1.247 pojavov pri domačih prašičih.
                  </li>
                </ul>
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
        </div>
      </div>
    </>
  );
}
