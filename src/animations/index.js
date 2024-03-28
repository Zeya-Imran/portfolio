export const animation = {
    x: [0, -40, 0], // Move from 0 to 200 to 0
    transition: {
        x: {
            duration: 5, // Duration for one cycle
            ease: "easeIn", // Easing function for the animation
            repeat: Infinity, // Repeat the animation indefinitely
            repeatType: "loop", // Type of repeating (loop, mirror, etc)
        }
    }
};

export const animations = {
    x: [0, 30, 0], // Move from 0 to 200 to 0
    transition: {
        x: {
            duration: 5, // Duration for one cycle
            ease: "easeInOut", // Easing function for the animation
            repeat: Infinity, // Repeat the animation indefinitely
            repeatType: "loop", // Type of repeating (loop, mirror, etc)
        }
    }
};

export const animationss = {
    x: [0, -40, 0], // Move from 0 to 200 to 0
    transition: {
        x: {
            duration: 5, // Duration for one cycle
            ease: "easeIn", // Easing function for the animation
            repeat: Infinity, // Repeat the animation indefinitely
            repeatType: "loop", // Type of repeating (loop, mirror, etc)
        }
    }
};

export const fadeInAnimation = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5, // Delay before animating
            duration: 1, // Animation duration
        },
    },
};

export const slideInAnimation = {
    hidden: { x: -100 },
    visible: {
        x: 0,
        transition: {
            delay: 0.5, // Delay before animating
            duration: 1, // Animation duration
            type: "spring", // Animation type (spring, tween, etc)
            stiffness: 120, // Stiffness of the spring animation
        },
    },
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};


export const textEffect = {
    initial:{opacity:0},
            whileInView:{opacity: 1},
            transition:{duration: 1.5}
}