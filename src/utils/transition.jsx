import { motion } from 'framer-motion'
import "./transition.scss"
import logo from "../assets/logo_ef.png"

const transition = (OldComponent) => {
    return () => (
        <>
            <OldComponent></OldComponent>
            <motion.div
                className='slide-out-transition'
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1 }}>
                <img src={logo} alt="logo animation transition" />
            </motion.div>
        </>
    )
}

export default transition