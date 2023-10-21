"use client";

import { NextResponse } from "next/server";
import { ChangeEvent, FormEvent, useState } from "react";
import { Mail, Phone } from "lucide-react";
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
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const initState: FormState = {
  isLoading: false,
  error: "",
  values: initValues,
};

export default function Contact() {
  const [state, setState] = useState<FormState>(initState);

  const { values } = state;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const data = await resend.emails.send({
        from: values.email,
        to: ["junade.dev@gmail.com"],
        subject: `Contact Form Submission from ${values.firstName}`,
        text: values.message,
      });
      toast.success("Email sent successfully.");
      return NextResponse.json(data);
    } catch (error) {
      toast.error("Error sending email");
      setState((prev) => ({
        ...prev,
        isLoading: false,
        // error: "Error sending email",
      }));
    }
  };

  return (
    <>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-indigo-500">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
          I really appreciate your interest in my products/services, and I
          &apos; m excited to hear any questions, comments, or feedback you may
          have. Let&apos;s embark on this journey together and have some fun
          along the way!
        </p>
        <div className=" text-slate-50 w-full flex justify-evenly items-center flex-wrap p-4">
          <div className="flex gap-2 hover:text-indigo-500">
            <Mail />
            <a href="mailto:apitsillis@gmail.com" className="p-text">
              apitsillis@gmail.com
            </a>
          </div>
          <div className="flex gap-2 hover:text-indigo-500">
            <Phone />
            <a href="tel:+27 (82) 457-4584" className="p-text">
              +27 (82) 457-4584
            </a>
          </div>
        </div>
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
                  name="firstName"
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
                className="block text-sm font-semibold leading-6 text-slate-50"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="text"
                  name="lastName"
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
              className="block text-sm font-semibold leading-6 text-slate-50"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              onChange={handleChange}
              placeholder="name@example.com"
              value={values.email}
              className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold leading-6 text-slate-50"
            >
              Subject
            </label>
            <input
              type="text"
              onChange={handleChange}
              id="subject"
              placeholder="Let us know how we can help you"
              value={values.subject}
              className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              typeof="text"
              onChange={handleChange}
              rows={8}
              id="message"
              placeholder="Leave a comment..."
              value={values.message}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300  bg-indigo-500  hover-bg-indigo-700  focus-ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </>
  );
}
