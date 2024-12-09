import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-blue-500 w-full h-14 flex items-center justify-between p-4">
      <div className="">
        <h1 className="text-xl font-bold">Neuro Genix</h1>
      </div>
      <div className="w-1/3 p-4">
        <ul className="text-md flex justify-end gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar