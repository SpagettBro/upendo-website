import React from "react";
import Image from "next/image";
import logo from "../images/logo2.png";

const footer: React.FC = () => {
  return (
    <div className="pt-16 pb-16 bg-darkgreen px-[20px] md:px-[170px] bg-cover">
      {/* Dit is het blok, niet aanpassen. Alleen kleur aanpassen */}
      <div className="grid grid-cols-12 gap-[20px]">
        {/* Dit is de grid, niet aanpassen. */}
        <div className="col-span-4 md:col-span-12 flex flex-col justify-between">
          {/* Dit is de div met content, aanpassen op basis van de grootte. */}

          <div className="font-butten text-body text-white flex flex-col justify-between md:flex-row">
            <div className="min-w-28 mb-10">
              <p className="font-body text-body text-green mb-[20px] md:mb-8">
                Services
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Configuration
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Visualisation
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                optimization
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Analysis
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Training
              </p>
            </div>

            <div className="min-w-28 mb-10">
              <p className="font-body text-body text-green mb-[20px] md:mb-8">
                Pricing
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Configuration
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Configuration
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Configuration
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Configuration
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Configuration
              </p>
            </div>

            <div className="min-w-28 mb-10">
              <p className="font-body text-body text-green mb-[20px] md:mb-8">
                Company
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Configuration
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Configuration
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Configuration
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Configuration
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Configuration
              </p>
            </div>

            <div className="min-w-28 mb-10">
              <p className="font-body text-body text-green mb-[20px] md:mb-8">
                Contact
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Configuration
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Configuration
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Configuration
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Configuration
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Configuration
              </p>
            </div>

            <div className="min-w-28 mb-10">
              <p className="font-body text-body text-green mb-[20px] md:mb-8">
                Follow Us
              </p>
              <div className="grid grid-cols-2 grid-rows-3">
                <a href="#" className="text-body">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-body">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-body">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-body">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-body">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 25 25"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 2  .657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-body">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 325 325"
                  >
                    <path
                      fill-rule="evenodd"
                      d="m 128 23.06 c 34.18 0 38.23 0.13 51.72 0.75 c 12.48 0.57 19.26 2.65 23.77 4.41 c 5.97 2.32 10.24 5.1 14.72 9.58 s 7.25 8.74 9.57 14.72 c 1.75 4.51 3.84 11.29 4.41 23.77 c 0.62 13.5 0.75 17.55 0.75 51.72 s -0.13 38.23 -0.75 51.72 c -0.57 12.48 -2.65 19.26 -4.41 23.77 c -2.32 5.97 -5.1 10.24 -9.57 14.72 c -4.48 4.48 -8.74 7.25 -14.72 9.57 c -4.51 1.75 -11.29 3.84 -23.77 4.41 c -13.5 0.62 -17.54 0.75 -51.72 0.75 s -38.23 -0.13 -51.72 -0.75 c -12.48 -0.57 -19.26 -2.65 -23.77 -4.41 c -5.97 -2.32 -10.24 -5.1 -14.72 -9.57 c -4.48 -4.48 -7.25 -8.74 -9.57 -14.72 c -1.75 -4.51 -3.84 -11.29 -4.41 -23.77 c -0.62 -13.5 -0.75 -17.55 -0.75 -51.72 s 0.13 -38.23 0.75 -51.72 c 0.57 -12.48 2.65 -19.26 4.41 -23.77 c 2.32 -5.97 5.1 -10.24 9.57 -14.72 c 4.48 -4.48 8.74 -7.25 14.72 -9.58 c 4.51 -1.75 11.29 -3.84 23.77 -4.41 c 13.5 -0.62 17.55 -0.75 51.72 -0.75 m 0 -23.06 c -34.76 0 -39.12 0.15 -52.77 0.77 c -13.62 0.62 -22.93 2.79 -31.07 5.95 c -8.42 3.27 -15.56 7.65 -22.67 14.76 c -7.12 7.12 -11.49 14.25 -14.76 22.67 c -3.16 8.14 -5.33 17.45 -5.95 31.07 c -0.62 13.65 -0.77 18.01 -0.77 52.77 s 0.15 39.12 0.77 52.77 c 0.62 13.62 2.79 22.93 5.95 31.07 c 3.27 8.42 7.65 15.56 14.76 22.67 c 7.12 7.12 14.25 11.49 22.67 14.76 c 8.14 3.16 17.45 5.33 31.07 5.95 c 13.65 0.62 18.01 0.77 52.77 0.77 s 39.12 -0.15 52.77 -0.77 c 13.62 -0.62 22.93 -2.79 31.07 -5.95 c 8.42 -3.27 15.56 -7.65 22.67 -14.76 c 7.12 -7.12 11.49 -14.25 14.76 -22.67 c 3.16 -8.14 5.33 -17.45 5.95 -31.07 c 0.62 -13.65 0.77 -18.01 0.77 -52.77 s -0.15 -39.12 -0.77 -52.77 c -0.62 -13.62 -2.79 -22.93 -5.95 -31.07 c -3.27 -8.42 -7.65 -15.56 -14.76 -22.67 c -7.12 -7.12 -14.25 -11.49 -22.67 -14.76 c -8.14 -3.16 -17.45 -5.33 -31.07 -5.95 c -13.65 -0.62 -18.01 -0.77 -52.77 -0.77 z m 0 62.27 c -36.3 0 -65.73 29.43 -65.73 65.73 s 29.43 65.73 65.73 65.73 s 65.73 -29.43 65.73 -65.73 s -29.43 -65.73 -65.73 -65.73 z m 0 108.4 c -23.56 0 -42.67 -19.1 -42.67 -42.67 s 19.1 -42.67 42.67 -42.67 s 42.67 19.1 42.67 42.67 s -19.1 42.67 -42.67 42.67 z m 83.69 -111 c 0 8.48 -6.88 15.36 -15.36 15.36 s -15.36 -6.88 -15.36 -15.36 s 6.88 -15.36 15.36 -15.36 s 15.36 6.88 15.36 15.36 z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="max-w-28 flex flex-col md:items-end text-right">
              <div className="justify-end">
                <Image className="h-full w-full" src={logo} alt="image" />
              </div>
              <div className="mt-[24px]">
                <p className="font-button text-body mb-[10px] md:mb-4">
                  Upendo@mail.gov
                </p>
                <p className="font-button text-body mb-[10px] md:mb-4">
                  +31 6 48484042
                </p>
                <p className="font-button text-body mb-[10px] md:mb-4">
                  Parkstraat 3A, Haren
                </p>
              </div>
            </div>
          </div>

          <hr className="border-t border-body mt-[10px] mb-[10px] md:mb-[45px] justify-center" />
          <div className="">
            <span className="font-body text-body text-white">
              ©2024 Upendo | a 2MDi Group company
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
