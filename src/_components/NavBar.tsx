import { FC, } from "react";
import { useDebouncedCallback } from 'use-debounce';

interface NavBarProps {
    setSearchText: (value: string) => void;
}

const NavBar: FC<NavBarProps> = ({ setSearchText }) => {

    const debounced = useDebouncedCallback(
        (value) => {
            setSearchText(value);
        },
        1000
    );

    return <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl">ZX Search Engine</h1>
            <input
                type="text"
                placeholder="Search..."
                className="p-2 w-full rounded"
                style={{ width: '400px' }}
                onChange={(e) => {
                    debounced(e.target.value)
                }}
            />
            <button className="bg-blue-500 text-white m-2 p-2 rounded mt-2">
                Search Options
            </button>

        </div>
    </nav>

}

export default NavBar;