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
                Pricing Plans
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Benefits
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Bundles
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Licences
              </p>
            </div>

            <div className="min-w-28 mb-10">
              <p className="font-body text-body text-green mb-[20px] md:mb-8">
                Company
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                About Us
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Our Team
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Case Studies
              </p>
            </div>

            <div className="min-w-28 mb-10">
              <p className="font-body text-body text-green mb-[20px] md:mb-8">
                Contact
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Contact Info
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Support
              </p>
              <p className="font-button text-body mb-[10px] md:mb-4">
                Careers
              </p>
            </div>

            <div className="min-w-28 mb-10">
              <p className="font-body text-body text-green mb-[20px] md:mb-8">
                Follow Us
              </p>
              <div className="flex md:grid md:grid-cols-2 md:grid-rows-3">
                <a href="#" className="text-body">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 25 25">
                    <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                  </svg>

                </a>
                <a href="#" className="text-body">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 25 25">
                    <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                  </svg>
                </a>
                <a href="#" className="text-body">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 25 25">
                    <path fill="currentColor" d="M12.008 16.521a3.84 3.84 0 0 0 2.47-.77v.04a.281.281 0 0 0 .005-.396.281.281 0 0 0-.395-.005 3.291 3.291 0 0 1-2.09.61 3.266 3.266 0 0 1-2.081-.63.27.27 0 0 0-.38.381 3.84 3.84 0 0 0 2.47.77Z" />
                    <path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-4.845-1.407A1.463 1.463 0 0 1 18.67 12a1.46 1.46 0 0 1-.808 1.33c.01.146.01.293 0 .44 0 2.242-2.61 4.061-5.829 4.061s-5.83-1.821-5.83-4.061a3.25 3.25 0 0 1 0-.44 1.458 1.458 0 0 1-.457-2.327 1.458 1.458 0 0 1 2.063-.064 7.163 7.163 0 0 1 3.9-1.23l.738-3.47v-.006a.31.31 0 0 1 .37-.236l2.452.49a1 1 0 1 1-.132.611l-2.14-.45-.649 3.12a7.11 7.11 0 0 1 3.85 1.23c.259-.246.6-.393.957-.405Z" clip-rule="evenodd" />
                    <path fill="currentColor" d="M15.305 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4.625 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                  </svg>
                </a>
                <a href="#" className="text-body">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 25 25">
                    <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-body">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 25 25">
                    <path d="M12.013 6.175 7.006 9.369l5.007 3.194-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194 5.007 3.194ZM6.981 17.806l5.006-3.193 5.006 3.193L11.987 21l-5.006-3.194Z" />
                    <path d="m12.013 12.545 5.006-3.194-5.006-3.176 4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194-4.98-3.211Z" />
                  </svg>

                </a>
                <a href="#" className="text-body">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 25 25">
                    <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="max-w-32 flex flex-col md:items-end md:text-right">
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
    </div >
  );
};

export default footer;
