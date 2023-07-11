import { ConnectButton } from '@rainbow-me/rainbowkit'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex mt-16 justify-center min-h-screen py-2">
      <Head>
        <title>Push Protocol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center">
            <span className="to-blue-500 bg-clip-text">
              Push Protocol - dNFT 🌈🧰
            </span>
          </h1>
          <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md my-12">
            <h2 className="text-2xl mb-6">Submission Form</h2>
            <form action="#" method="POST">
              <div className="m-4 flex justify-center">
                <ConnectButton />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input type="text" id="name" name="name" required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input type="email" id="email" name="email" required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
              </div>
              <div className="mb-4">
                <label htmlFor="linkedin" className="block text-gray-700 mb-2">LinkedIn</label>
                <input type="text" id="linkedin" name="linkedin"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
              </div>
              <div className="mb-4">
                <label htmlFor="twitter" className="block text-gray-700 mb-2">Twitter</label>
                <input type="text" id="twitter" name="twitter"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
              </div>
              <div className="mb-4">
                <label htmlFor="github" className="block text-gray-700 mb-2">GitHub</label>
                <input type="text" id="github" name="github"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
              </div>
              <div className="mb-4">
                <label htmlFor="submission-link" className="block text-gray-700 mb-2">Submission Link</label>
                <input type="url" id="submission-link" name="submission-link"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
              </div>
              <div className="flex justify-center">
                <button type="submit"
                  className="bg-black  w-full hover:bg-purple-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
