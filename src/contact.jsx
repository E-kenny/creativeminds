import Nav from './nav';
import Footer from './footer';


export default function Contact(){
    return (
        <div >
          <Nav/>
          <div className='m-4'>
              <h2 className='m-auto py-10 w-32 sm:w-48 text-2xl md:text-4xl font-bold'>Contact</h2>

              <img className='shadow h-80 w-80 sm:w-96 m-auto' src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="CreativeMinds" />

              <p className='py-10'>
                  Our Office is located at Mushin 
                  We are available 24/7 for your service. To stay up to date on our products follow us on all our social media platforms.
              </p>
          </div>
          <Footer/>
        </div>
    );
}