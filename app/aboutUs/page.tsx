// pages/about.tsx

import Header from "../../components/ui/header";
import Footer from "../../components/ui/footer";

import Link from "next/link";
export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main content */}
      <main className="flex-1">
        <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center pb-12">
              <h2 className="text-3xl font-bold leading-tight text-gray-900">
                About Our Company
              </h2>
              <p className="text-lg text-gray-700 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-purple-600 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-600 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
