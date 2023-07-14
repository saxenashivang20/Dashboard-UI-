import { FaArrowRight } from 'react-icons/fa'
import PieChart from './PieChart'

const SummaryPie = () => {
  return (
    <div className='summarys h-full w-full row-span-2 grid grid-rows-1 grid-cols-2 gap-8'>
      <div className='pie--chart relative box-border bg-white rounded-2xl grid grid-rows-1 grid-cols-1'>
        <h1 className='text-2xl absolute top-0 left-1 text-left px-8 py-4 font-semibold'>
          Top products
        </h1>
        <select
          id='cars'
          name='cars'
          className='abolute top-4 right-4 w-fit px-4 py-2 opacity-70 self-end rounded-lg font-medium text-gray-600'
        >
          <option value='volvo'>May-June 2022</option>
          <option value='saab'>May-June 2023</option>
          <option value='fiat'>May-June 2024</option>
          <option value='audi'>May-June 2025</option>
        </select>
        <PieChart />
      </div>
      <div className='more--details relative bg-white rounded-2xl flex-col'>
        <a
          href='#'
          className='absolute top-[10px] right-[10px] px-8 py-4 flex text-blue-700'
        >
          <span className='px-4'>See more</span>
          <FaArrowRight />
        </a>
        <h1 className='text-2xl text-left px-8 py-4 font-semibold'>
          Today's schedule
        </h1>
        <div className='event--wrapper flex flex-col justify-around px-8'>
          <div className='item border-l-4 border-[#F4ECDD] px-4 my-2'>
            <h1 className='title text-lg font-semibold text-left my-0'>
              Meeting with suppliers from kuta Bali
            </h1>
            <p className='time text-left text-lg opacity-60'>14:00 - 15:00 </p>
            <p className='location text-left'>at Sunset Road,kuta,Bali </p>
          </div>
          <div className='item border-l-4 border-[#EFDADA] px-4 my-2'>
            <h1 className='title text-lg font-semibold text-left my-0'>
              Check Operation at Giga Factory 1
            </h1>
            <p className='time text-left text-lg opacity-60'>18:00 - 20:00</p>
            <p className='location text-left'>At Central Jakarta</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummaryPie
