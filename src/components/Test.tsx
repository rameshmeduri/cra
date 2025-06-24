function Test() {
  return (
    <div className="container border ml-auto mr-auto mt-4 p-4">
      <h1>http://localhost:{import.meta.env.VITE_APP_PORT}</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-lg">This is a test component.</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Click Me
      </button>
      <p className="mt-4">This is a simple test to check Tailwind CSS integration.</p>
      <p className="mt-2 text-gray-600">If you see this, Tailwind CSS is working!</p>
    </div>
  )
}

export default Test;