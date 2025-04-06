"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Card3DProps {
    children: ReactNode;
}

const Card3D = ({ children }: Card3DProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
        >
            {children}
        </motion.div>
    );
};

export default Card3D;
