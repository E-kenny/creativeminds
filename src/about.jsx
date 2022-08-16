import Nav from './nav'

  export default function About() {
    return (
        <div >
          <Nav/>
          <div className='m-3'>
              <h2 className='m-auto py-10 w-1/3 md:w-96 text-lg md:text-5xl'>Creactive Minds</h2>

              <img className='shadow h-80 w-80 sm:w-96 m-auto' src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="CreativeMinds" />

              <p>
                  We are upholstery enterprise, We deal on Cabinets, Consoles, Sofas, Shelves, Wardrobes, Office tables and Beds. We Deliver both homogenized and customized products.
              </p>
          </div>
          
        </div>
    )
  }
  