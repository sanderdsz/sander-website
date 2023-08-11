import { useState } from "react";
import Link from "next/link";

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [showModal, setShowModal] = useState(false)

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative inline-block text-left ">
			<button
				type="button"
				onClick={toggleDropdown}
				className={`px-2 py-1 rounded-md ${
					isOpen ? `bg-slate-300 dark:bg-slate-700 dark:text-gray-200` : null
				}`}
			>
				About
			</button>
			{isOpen && (
				<div
					className="absolute w-[12rem] left-0 mt-0 bg-slate-300 border-[1px] border-gray-400 rounded-md
          dark:bg-slate-700 dark:border-gray-800
          transition ease-in duration-200"
				>
					<div
						className="py-1"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="options-menu"
					>
						<Link
							onClick={toggleDropdown}
							href={"/about"}
							className="block mx-2 my-1 px-2 py-1 text-gray-700
							hover:text-gray-200 hover:bg-blue-500 hover:rounded-md
              dark:text-gray-50"
							role="menuitem"
						>
							Sander Zuchinalli
						</Link>
						<a>
							<hr className="mx-4 h-[1px] border-t-0 bg-gray-400 dark:bg-gray-800" />
						</a>
						<a
							href="#"
							className="block mx-2 my-1 px-2 py-1 text-gray-700
							hover:text-gray-200 hover:bg-blue-500 hover:rounded-md
              dark:text-gray-50"
							role="menuitem"
						>
							Github
						</a>
						<a
							href="#"
							className="block mx-2 my-1 px-2 py-1 text-gray-700
							hover:text-gray-200 hover:bg-blue-500 hover:rounded-md
              dark:text-gray-50"
							role="menuitem"
						>
							Linkedin
						</a>
						<a>
							<hr className="mx-4 h-[1px] border-t-0 bg-gray-400 dark:bg-gray-800" />
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-gray-700 text-opacity-50 cursor-not-allowed dark:text-gray-500 "
							role="menuitem"
						>
							Show all
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-gray-700 text-opacity-50 cursor-not-allowed dark:text-gray-500"
							role="menuitem"
						>
							Hide others
						</a>
						<a>
							<hr className="mx-4 h-[1px] border-t-0 bg-gray-400 dark:bg-gray-800" />
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-gray-700 text-opacity-50 cursor-not-allowed dark:text-gray-500"
							role="menuitem"
						>
							Log out
						</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default Dropdown;