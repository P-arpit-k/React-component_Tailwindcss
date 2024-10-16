import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-cyan-400  text-black py-10 justify-center pl-[200px]">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
      <div>
        <h3 className="font-bold text-xl mb-4 text-black">Company</h3>
        <ul>
          <li className="mb-2"><a href="/" className="hover:underline">About Us</a></li>
          <li className="mb-2"><a href="/" className="hover:underline">Careers</a></li>
          <li className="mb-2"><a href="/" className="hover:underline">Press</a></li>
          <li className="mb-2"><a href="/" className="hover:underline">Blog</a></li>
        </ul>
      </div>

      
      <div>
        <h3 className="font-bold text-xl mb-4 text-black">Support</h3>
        <ul>
          <li className="mb-2"><a href="/" className="hover:underline">Help Center</a></li>
          <li className="mb-2"><a href="/" className="hover:underline">Safety Center</a></li>
          <li className="mb-2"><a href="/" className="hover:underline">Community Guidelines</a></li>
          <li className="mb-2"><a href="/" className="hover:underline">Contact Support</a></li>
        </ul>
      </div>

     
      <div>
        <h3 className="font-bold text-xl mb-4 text-black">Legal</h3>
        <ul>
          <li className="mb-2"><a href="/" className="hover:underline">Privacy Policy</a></li>
          <li className="mb-2"><a href="/" className="hover:underline">Terms of Service</a></li>
          <li className="mb-2"><a href="/" className="hover:underline">Cookie Policy</a></li>
          <li className="mb-2"><a href="/" className="hover:underline">Copyright Policy</a></li>
        </ul>
      </div>

     
      <div>
        <h3 className="font-bold text-xl mb-4 text-black">Follow Us</h3>
        <ul>
          <li className="mb-2"><a href="/" className="hover:underline">Facebook</a></li>
          <li className="mb-2"><a href="/" className="hover:underline">Twitter</a></li>
          <li className="mb-2"><a href="/" className="hover:underline">Instagram</a></li>
          <li className="mb-2"><a href="/" className="hover:underline">LinkedIn</a></li>
        </ul>
      </div>
    </div>

    <div className="mt-8 pr-[40px] text-center text-sm text-black">
      © 2024 Your Company. All rights reserved.
    </div>
  </footer>
  )
}
