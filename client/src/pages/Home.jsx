import React from 'react'

export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4text-slate-700'>Welcome to my Authentication App</h1>
      <br />
      <p className='mb-4 text-slate-600'>This is a full-stack web application built with the MERN(MongoDb, Express, React, Nodejs)
        stack. It includes authentication features that allow users to sign up, log in, and log 
        out, and provide access to protected routes only for
        authentication users.
      </p>
      <p className='mb-4 text-slate-600'>
        The front-end of the application is built with React and uses React Router for client-side routing.The back-end is built with Nodejs and Express and uses MongoDB as the database.
        Authentication is implemented using JSON Web Tokens(JWT).
      </p>
      <p className='mb-4 text-slate-600'>
        This application is intended as a starting point for building full-stack web application with authentication using the MERN stack. 
        Feel free to use it as a template for your own projects/
      </p>
    </div>
  )
}
