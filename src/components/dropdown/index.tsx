import { useState } from "react";

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative inline-block text-left ">
			<button
				type="button"
				onClick={toggleDropdown}
				className={`px-2 rounded-md ${
					isOpen ? `bg-slate-300 dark:bg-slate-700 dark:text-gray-200` : null
				}`}
			>
				About
			</button>
			{isOpen && (
				<div
					className="w-[11rem] absolute left-0 mt-1 bg-slate-300 border-[1px] border-gray-400 rounded-md
          dark:bg-slate-700 dark:border-gray-800 transition ease-in duration-200"
				>
					<div
						className="py-1"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="options-menu"
					>
						<a
							href="#"
							className="block px-4 py-2 text-gray-700 hover:bg-slate-400 hover:rounded-md
              dark:text-gray-200 dark:hover:bg-slate-800"
							role="menuitem"
						>
							Sander Zuchinalli
						</a>
						<a>
							<hr className="h-[1px] border-t-0 bg-gray-400 dark:bg-gray-800" />
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-gray-700 hover:bg-slate-400 hover:rounded-md
              dark:text-gray-200 dark:hover:bg-slate-800"
							role="menuitem"
						>
							Github
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-gray-700 hover:bg-slate-400 hover:rounded-md
              dark:text-gray-200 dark:hover:bg-slate-800"
							role="menuitem"
						>
							Linkedin
						</a>
						<a>
							<hr className="h-[1px] border-t-0 bg-gray-400 dark:bg-gray-800" />
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-gray-700 dark:text-gray-500 text-opacity-50 cursor-not-allowed"
							role="menuitem"
						>
							Show all
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-gray-700 dark:text-gray-500 text-opacity-50 cursor-not-allowed"
							role="menuitem"
						>
							Hide others
						</a>
						<a>
							<hr className="h-[1px] border-t-0 bg-gray-400 dark:bg-gray-800" />
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-gray-700 dark:text-gray-500 text-opacity-50 cursor-not-allowed"
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
