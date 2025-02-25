import React from 'react'

const error=()=> {
  return (
    <> 
    <div class="bg-gray-90 flex items-center justify-center h-screen">

       <div class="text-center">
        <h1 class="text-9xl font-bold text-gray-500">404</h1>
        <h2 class="text-3xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
        <p class="text-gray-600 mt-2">The page you are looking for doesn't exist or has been moved.</p>

        <a href="/" class="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            Go Home
        </a>
    </div>
    </div>
    </>
  )
}

export default error
