import React from 'react';
import Link from 'next/link';
import Heading from './Heading';
import Image from 'next/image';

const Projects = () => {
  return (
    <div data-aos="zoom-in-up">
      <div className="pt-32 p-4 min-h-screen flex flex-col items-center">
        <h1 className="text-3xl text-white mb-6 font-bold">
          <Heading title="My Projects" />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-lg">
          {/* Card 1 */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6  w-full">
            <Link href="https://kababjees-website.vercel.app/" target="_blank">
              <Image
                src="/kababjees-img.png"
                alt="Kababjees"
                width={400}
                height={300}
                className="rounded-md hover:opacity-90 transition-opacity duration-200 w-full"
              />
            </Link>
            <h2 className="text-xl text-white mt-4 font-semibold text-center">Kababjees Website</h2>
          </div>

          {/* Card 2 */}
          <div className=" bg-gray-800 rounded-lg shadow-md p-6 w-full">
            <Link href="https://icons-website.vercel.app/" target="_blank">
              <Image
                src="/Apple-website.png"
                alt="Apple Website"
                width={400}
                height={300}
                className="rounded-md hover:opacity-90 transition-opacity duration-200 w-full"
              />
            </Link>
            <h2 className="text-xl text-white mt-4 font-semibold text-center">Apple Website</h2>
          </div>

          {/* Card 3 */}
          <div className=" bg-gray-800 rounded-lg shadow-md p-6 w-full">
            <Link href="https://myapp-sir-mubasshir-figma-assignment2-odlg.vercel.app/" target="_blank">
              <Image
                src="/next-js assignment.png"
                alt="Next.js Assignment"
                width={400}
                height={300}
                className="rounded-md hover:opacity-90 transition-opacity duration-200 w-full"
              />
            </Link>
            <h2 className="text-xl text-white mt-4 font-semibold text-center">Figma website</h2>
          </div>

          {/* Card 4 */}
          <div className=" bg-gray-800 rounded-lg shadow-md p-6 w-full">
            <Link href="https://website-navigation-bar.vercel.app/" target="_blank">
              <Image
                src="/website-navigation-bar.png"
                alt="Website Navigation Bar"
                width={400}
                height={300}
                className="rounded-md hover:opacity-90 transition-opacity duration-200 w-full"
              />
            </Link>
            <h2 className="text-xl text-white mt-4 font-semibold text-center">Navigation Bar</h2>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6 w-full">
            <Link href="https://portfolio-website-html-css-peach.vercel.app/" target="_blank">
              <Image
                src="/portfolio-html-css.png"
                alt="Portfolio HTML/CSS"
                width={400}
                height={300}
                className="rounded-md hover:opacity-90 transition-opacity duration-200 w-full"
              />
            </Link>
            <h2 className="text-xl text-white mt-4 font-semibold text-center">Portfolio Website</h2>
          </div>

          {/* Card 6 */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6 w-full">
            <Link href="https://mini-project-two-liart.vercel.app/" target="_blank">
              <Image
                src="/mini-project.png"
                alt="Mini Project"
                width={400}
                height={300}
                className="rounded-md hover:opacity-90 transition-opacity duration-200 w-full"
              />
            </Link>
            <h2 className="text-xl text-white mt-4 font-semibold text-center">Mini Project</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
