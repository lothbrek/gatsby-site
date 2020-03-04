import React, { ReactElement, useState } from "react"
import Image from "../components/image"
interface Props {}

function Index({}: Props): ReactElement {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Image />
            <span className="font-semibold text-xl ">
             <a href="/">Nautical Fox Games</a>
            </span>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => {
                setMenuOpen(isMenuOpen => !isMenuOpen)
              }}
              className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full ${
              isMenuOpen ? "block" : "hidden"
            } lg:block flex-grow lg:flex lg:items-center lg:w-auto`}
          >
            <div className="text-sm lg:flex-grow">
              <a
                href="/about"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                About Us
              </a>
              <a
                href="/4th-wall"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
              >
                Games
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="container max-w-md mx-auto mt-10">
          <div className="px-6 py-4">
            <center><div className="font-bold text-xl mb-2">About Us</div>
            </center>
            <div className="px-6 py-4">
          </div>
          Nautical Fox Games is a small team, mainly consisting of three members.
      Matt, James, and Kate have had a love of video games and technology for over 80 years between them.
          </div>
          
        </div>
    </>
  )
}

export default Index
