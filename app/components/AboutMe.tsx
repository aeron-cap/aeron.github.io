"use client";
import React, { useState } from "react";
import {
  Button,
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const AboutMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <main>
      <div>
        <Button
          onClick={() => setIsOpen(true)}
          id="AboutMe"
          className="block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          About Me
        </Button>
      </div>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-black/40 p-6 backdrop-blur-3xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 text-white font-bold">
                About Me
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/75">
                A graduate of Computer Engineering from Batangas State
                University The National Engineering University - Alangilan last
                August 2024.<br></br>
                <br></br>Recently, I have been starting to re-learn concepts and
                fundamentals like Java Frameworks, Python libraries, SQL, and
                Web development (HTML, CSS, JavaScript) frameworks and tech
                stacks . My main focus as of now is to learn Java Spring, learn
                implementation of REST APIs to my projects, and generally
                develop more projects. In the near future, I also want to learn
                and dive into the world of AI.
                <br></br>
                <br></br>When I am not on VS Code, I usually hang out with my
                gf, play Pokemon, watch Anime, dabbling in digital art, or
                working out.
              </p>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </main>
  );
};

export default AboutMe;
