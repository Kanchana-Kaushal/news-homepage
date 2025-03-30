import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function Nav() {
    const [isMenuShown, setIsMenuShown] = useState(false);

    function showMenu() {
        setIsMenuShown((prevState) => !prevState);
    }
    return (
        <nav className="my-4 flex items-center justify-between py-4 md:my-8">
            <img src="/news-homepage/logo.svg" alt="logo" className="w-13" />

            <div className="hidden md:block">
                <ul className="text-Dark-grayish-blue flex items-center space-x-8">
                    <li className="hover:text-Soft-red transition-colors duration-75 ease-in">
                        <a href="#">Home</a>
                    </li>
                    <li className="hover:text-Soft-red transition-colors duration-75 ease-in">
                        <a href="#">New</a>
                    </li>
                    <li className="hover:text-Soft-red transition-colors duration-75 ease-in">
                        <a href="#">Popular</a>
                    </li>
                    <li className="hover:text-Soft-red transition-colors duration-75 ease-in">
                        <a href="#">Trending</a>
                    </li>
                    <li className="hover:text-Soft-red transition-colors duration-75 ease-in">
                        <a href="#">Categories</a>
                    </li>
                </ul>
            </div>

            <AnimatePresence>
                {/* background Overlay */}
                {isMenuShown && (
                    <motion.div
                        className="fixed inset-0 bg-gray-950"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        exit={{ opacity: 0 }}
                        key={"overlay"}
                    ></motion.div>
                )}

                {isMenuShown && (
                    <motion.div
                        className="bg-Off-white fixed top-0 right-0 z-10 min-h-screen w-7/10 max-w-xs overflow-hidden p-8 shadow-2xl"
                        initial={{ x: 500 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.25, ease: "linear" }}
                        exit={{ x: 500 }}
                        key={"menu"}
                    >
                        <img
                            src="/news-homepage/icon-menu-close.svg"
                            alt=""
                            className="float-right"
                            onClick={showMenu}
                        />
                        <ul className="my-20 space-y-8 text-xl font-semibold">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">New</a>
                            </li>
                            <li>
                                <a href="#">Popular</a>
                            </li>
                            <li>
                                <a href="#">Trending</a>
                            </li>
                            <li>
                                <a href="#">Categories</a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <img
                src="/news-homepage/icon-menu.svg"
                alt=""
                className="md:hidden"
                onClick={showMenu}
            />
        </nav>
    );
}

export default Nav;
