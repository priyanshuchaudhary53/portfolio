"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import DarkModeSwitcher from "../DarkModeSwitcher";

const Header = () => {
  return (
    <header className="py-[20px] md:py-[24px]">
      <div className="px-[20px] max-w-[1440px] mx-auto flex justify-between items-center md:px-[40px] lg:px-[72px]">
        <div className="text-2xl font-bold tracking-tight">
          <Link href="/" className="text-gray-800 dark:text-white">
            <span className="text-gray-400">priyanshu</span>c.
          </Link>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <DarkModeSwitcher />
          {/* <motion.div
            className="text-gray-800 text-2xl py-[12px] px-[24px] border rounded-full border-gray-800 cursor-pointer dark:border-white dark:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RxHamburgerMenu />
          </motion.div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
