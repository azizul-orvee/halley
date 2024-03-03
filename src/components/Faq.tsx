import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqitems = [
  {
    question: "Can I get a quote for tyre fitting?",
    response:
      "To receive a quote for your tyre fitting needs, please contact us directly via phone or message. Our prices vary depending on factors such as your location and our current availability. Our team will be happy to provide you with all the information you need to make an informed decision.",
  },
  {
    question: "What types of tyres do you offer?",
    response:
      "We specialize in providing mid-range tyres that offer a balance of performance and value. If you have a specific brand or type of tyre in mind, please let us know, and we will do our best to accommodate your request based on our current stock and availability.",
  },
  {
    question: "Do you offer emergency mobile tyre fitting service?",
    response:
      "We do. Please let one off our team know its a emergency and the booking will be treated as priority.",
  },
  {
    question: "What payment methods do you accept?",
    response:
      "For your convenience, we accept several payment methods, including card payments, bank transfers, and cash. Please choose the option that works best for you when booking our services. If you have any questions regarding payment, feel free to contact us for more information.",
  },
];

export default function Faq() {
  return (
    <div
      className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16"
      id="faq"
    >
      <h2 className="text-4xl font-bold text-center">
        Frequently Asked Questions
      </h2>
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-transparent dark:bg-transparent">
        {faqitems.map(({ question, response }) => (
          <div key={question}>
            <Disclosure>
              {({ open }) => (
                <div className="mt-4">
                  <Disclosure.Button
                    className={`${
                      open
                        ? "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-100 rounded-b-none"
                        : ""
                    } flex w-full justify-between rounded-lg bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800 px-4 py-4 text-left text-base font-medium `}
                  >
                    <h2 className="font-semibold">{question}</h2>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transition-transform" : ""
                      } h-5 w-5 flex-shrink-0`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`${
                      open
                        ? "px-4 pt-4 pb-2 text-base dark:text-neutral-400"
                        : ""
                    } bg-neutral-100 dark:bg-neutral-800 rounded-b-lg`}
                  >
                    <p>{response}</p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
}
