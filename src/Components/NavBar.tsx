const NavBar = () => {

    return <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl">ZX Search Engine</h1>
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 w-full rounded"
                    style={{ width: '400px' }}
                />
            </div>
            <button className="bg-blue-500 text-white p-2 rounded mt-2">
                Search Options
            </button>
        </div>
    </nav>

}

export default NavBar;