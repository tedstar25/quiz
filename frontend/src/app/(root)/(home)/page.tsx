

import { FunctionComponent } from 'react';
import  BackgroundGradientAnimation  from "@/app/components/ui/background-gradient-animation";


import Header from '@/app/components/Section/Header';
import Footer from '@/app/components/Section/Footer';
import Gameboard from '@/app/components/Section/Gameboard';


const Home: FunctionComponent = () => {






  return (
  <div className='aspect-w-1 aspect-h-2 border'>
    <div className='flex flex-col h-screen'>
        <div className='h-1/10'>
          <Header />
        </div>


        <div className='flex-grow h-4/5  overflow-hidden border-white-500'>
              <Gameboard/>
        </div>

        <div className='h-1/10 border'>
          <Footer />
        </div>
    </div>
  </div>


    


  );
};

export default Home;
