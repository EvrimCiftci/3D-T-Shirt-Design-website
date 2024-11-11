import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion'

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img src="threejs.png" alt="logo"
              className='w-8 h-8 object-contain' />
          </motion.header>
          <motion.div className='home-content'
            {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                LET'S <br className='xl:block hidden' />
                BUILD SOMETHING
               </h1>
            </motion.div>
            <motion.div {...headContentAnimation}
            className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-gray-600 text-base'>
                Create the shirt in your dream with my new 3D customization tool.
                <strong>Between unlimited customization possibilities, do as you wish</strong>
                {""} Make your dream come true.
              </p>

              <CustomButton
                type="filled"
                title="Customize shirt"
                handleClick={() => state.intro = false}
                customStyles = "w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home