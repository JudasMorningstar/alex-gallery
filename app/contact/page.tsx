"use client";

import { NextResponse } from "next/server";
import { FormEvent, useState } from "react";
import { Resend } from "resend";
import { toast } from "sonner";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormState {
  isLoading: boolean;
  error: string;
  values: FormValues;
}

const initValues: FormValues = {
  firstName: "",
  email: "",
  lastName: "",
  subject: "",
  message: "",
};

const initState: FormState = {
  isLoading: false,
  error: "",
  values: initValues,
};

export default function Contact() {
  const [state, setState] = useState(initState);

  const { values } = state;

  const handleChange = ({ target }: any) =>
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [target.name]: target.value },
    }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
      const data = await resend.emails.send({
        from: values.email,
        to: ["junade.dev@gmail.com"],
        subject: values.subject,
        text: values.message,
      });
      toast.success("Email sent successfully.");
      return NextResponse.json(data);
    } catch (error) {
      toast.error("Error sending email");
      return NextResponse.json({ error });
    }
  };

  return (
    <>
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-indigo-500">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
          I really appreciate your interest in my products/services, and
          I&apos;m excited to hear any questions, comments, or feedback you may
          have. Let&apos;s embark on this journey together and have some fun
          along the way!
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-slate-50"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="Alex"
                  value={values.firstName}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-300"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  onChange={handleChange}
                  placeholder="Pitsillis"
                  value={values.lastName}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-300 mb-2"
            >
              Your email
            </label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              className="shadow-sm text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="name@example.com"
              value={values.email}
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold leading-6 mb-2 text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              onChange={handleChange}
              id="subject"
              className="block p-3 w-full text-sm rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-slate-50 dorder-gray-600 placeholder-gray-400 text-gray-900 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="Let us know how we can help you"
              value={values.subject}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2 leading-6 text-gray-300"
            >
              Your message
            </label>
            <textarea
              onChange={handleChange}
              rows={8}
              id="message"
              className="block p-2.5 w-full text-sm rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500 bg-slate-50 border-gray-600 placeholder-gray-400 text-gray-900 focus:ring-primary-500 focus:border-indigo-500"
              placeholder="Leave a comment..."
              value={values.message}
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300  bg-indigo-500  hover:bg-indigo-700  focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </>
  );
}
