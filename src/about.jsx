import Nav from './nav'

  export default function About() {
    return (
        <div>
          <Nav/>
          <h2 className='m-auto py-10 w-1/2 sm:w-1/3 text-2xl sm:text-5xl'>Creactive Minds</h2>

          <img className='h-screen w-full' src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="CreativeMinds" />

          <p>
            We are upholstery enterprise, We deal on Cabinets, Consoles, Sofas, Shelves, Wardrobes, Office tables and Beds. We Deliver both homogenized and customized products.
          </p>
        </div>
    )
  }
  