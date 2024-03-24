import { faqs } from '@/constants'
import Accordion from './Accordion'

const Faq = () => {
  return (
    <div className='container mx-auto py-24 px-6 min-h-screen'>
      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
             <span className="text-gray-90">Frequently Asked Questions</span>
        </div>
        <div className="mt-12 max-w-[700px] mx-auto">
            {faqs.map((accord) => {
                return <Accordion key={accord.id} {...accord} />
            })}
        </div>
    </div>
  )
}

export default Faq
