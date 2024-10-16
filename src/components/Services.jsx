import React from 'react'

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 ">
   
    <div className=" text-white text-center py-12">
      <h1 className="text-5xl text-black font-bold">Our Services</h1>
      <p className="mt-4 text-black text-lg">
        We offer a range of innovative solutions to help your business grow and thrive in the digital age.
      </p>
    </div>

    <div className="container mx-auto px-6 py-10 space-y-16">
      {/* Service 1: Web Development */}
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <div className="md:flex items-center space-y-4 md:space-y-0">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Web Development</h2>
            <p className="text-gray-700 leading-relaxed">
              Our web development team builds responsive, user-friendly, and high-performing websites using the latest
              technologies. Whether you need an eCommerce platform, a corporate website, or a simple landing page,
              we deliver scalable solutions tailored to your business.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/Website.png"
              alt="Web Development"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <div className="md:flex items-center space-y-4 md:space-y-0 md:flex-row-reverse">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Mobile App Development</h2>
            <p className="text-gray-700 leading-relaxed">
              We design and develop native and cross-platform mobile applications that deliver engaging and seamless
              user experiences. From Android to iOS, our mobile solutions help you connect with your audience on
              their preferred devices.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/Mobile development-bro.png"
              alt="Mobile App Development"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <div className="md:flex items-center space-y-4 md:space-y-0">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Cloud Solutions</h2>
            <p className="text-gray-700 leading-relaxed">
              We provide secure and scalable cloud solutions that enable businesses to operate efficiently, reduce
              costs, and enhance collaboration. Our cloud services include infrastructure management, cloud migration,
              and DevOps solutions.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/Server-cuate.png"
              alt="Cloud Solutions"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <div className="md:flex items-center space-y-4 md:space-y-0 md:flex-row-reverse">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">IT Consulting</h2>
            <p className="text-gray-700 leading-relaxed">
              Our IT consulting services help you navigate the ever-evolving technological landscape. We offer
              strategic guidance, digital transformation plans, and IT roadmaps that align with your business goals
              and optimize your processes.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/Computer login-bro.png"
              alt="IT Consulting"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <div className="md:flex items-center space-y-4 md:space-y-0">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">UI/UX Design</h2>
            <p className="text-gray-700 leading-relaxed">
              Our UI/UX design team creates intuitive and engaging interfaces that enhance user experience and drive
              customer satisfaction. We blend creativity with functionality to deliver designs that are both visually
              stunning and easy to use.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/UI-UX design-amico.png"
              alt="UI/UX Design"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}
