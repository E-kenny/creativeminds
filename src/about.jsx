import Nav from './nav'
import Footer from './footer'

  export default function About() {
    return (
        <div >
          <Nav/>
          <div className='m-4'>
              <h2 className='m-auto py-10 w-32 sm:w-48 text-2xl md:text-4xl font-bold'>About Us</h2>

              <img className='h-80 w-80 sm:w-96 m-auto' src="undraw_Multitasking_re_ffpb.png" alt="CreativeMinds" />

              <p className='py-10'>
                  We are upholstery enterprise, We deal on Cabinets, Consoles, Sofas, Shelves, Wardrobes, Office tables and Beds. We Deliver both homogenized and customized products.
              </p>
          </div>
          <Footer/>
        </div>
    )
  }
  