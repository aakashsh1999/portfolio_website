import React from "react";
import { motion } from "framer-motion";

export const TechCard = (props) => {
    let name = props.name
    console.log("Greeting Comp render");
    console.log(props)
    return <motion.div
        key={props.name}
        initial="hidden"
        whileInView={"visible"}
        variants={{
            visible: {
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                },
            },
            hidden: { opacity: 1, y: 80 },
        }}
        className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
    >
        <img alt="" src={props?.link} className="w-12" />
        <h4 className="text-md ml-4">{name}</h4>
    </motion.div>

}
