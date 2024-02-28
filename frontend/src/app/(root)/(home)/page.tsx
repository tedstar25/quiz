

import { FunctionComponent } from 'react';
import  BackgroundGradientAnimation  from "@/app/components/ui/background-gradient-animation";

import Answers from '@/app/components/Section/Answers';
import Header from '@/app/components/Section/Header';
import Display from '@/app/components/Section/Display';
import Footer from '@/app/components/Section/Footer';


const Home: FunctionComponent = () => {
  return (
    <div className='aspect-w-1 aspect-h-2 border-red'>


        <div className='flex flex-col h-screen'>
            <div className='h-[10%]'>
              <Header />
            </div>


            <div className='flex-grow h-4/5 bg-purple  overflow-hidden border-white-500'>

              <div className='flex-1'>
                <Display />
              </div>
                <div className="flex-1 flex-end   text-white font-bold px-4  text-3xl text-center z-10 ">
                  <Answers/>
                </div>

            </div>

            <div className='h-[10%] border border-purple'>
              <Footer />
            </div>
        </div>

    </div>


    


  );
};

export default Home;
