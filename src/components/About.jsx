import React from 'react'

export default function About() {
  return (
    
    <div className="min-h-screen bg-gray-100 py-10">
   
    <div className=" text-black text-center py-12">
      <h1 className="text-5xl font-bold">About Us</h1>
      <p className="mt-4 text-lg">
        Learn more about who we are and what drives us to deliver the best.
      </p>
    </div>

    <div className="container mx-auto px-6 py-10 space-y-16">
      {/* Company History */}
      <div className='flex gap-[50px] p-7 '>
      <section className="bg-white p-8  shadow-lg hover:scale-105 duration-500 rounded-xl">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-4">Our History</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded in 2010, our company has grown from a small team of passionate developers to
          a leading tech firm providing innovative solutions worldwide. Over the past decade, we
          have worked with over 200 clients, delivering cutting-edge projects and making a
          significant impact in the technology sector.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-white p-8  shadow-lg hover:scale-105 duration-500 rounded-xl">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-4 ">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to empower businesses through digital transformation, leveraging
          state-of-the-art technologies to streamline operations, enhance customer engagement, and
          drive sustainable growth. We are committed to delivering exceptional service and
          creating long-lasting relationships with our clients.
        </p>
      </section>
      </div>







      {/* Our Team Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <img
              className="w-32 h-32 mx-auto rounded-full"
              src="/images/arpit.png"
              alt="Team Member"
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4">Arpit Patel</h3>
            <p className="text-gray-600">CEO & Founder</p>
            <p className="mt-2 text-gray-700">
              John is a visionary leader with over 15 years of experience in the tech industry,
              guiding our company to success.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <img
              className="w-32 h-32 mx-auto rounded-full"
              src="/images/vishakha.png"
              alt="Team Member"
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4">John Lee</h3>
            <p className="text-gray-600">Chief Technology Officer</p>
            <p className="mt-2 text-gray-700">
              John is responsible for driving the technological advancements that keep our company
              ahead of the competition.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <img
              className="w-32 h-32 mx-auto rounded-full"
              src="/images/arpit.png"
              alt="Team Member"
            />
            <h3 className="text-xl font-bold text-gray-800 mt-4">Mark Lee</h3>
            <p className="text-gray-600">Lead Designer</p>
            <p className="mt-2 text-gray-700">
              Mark is the creative force behind our design and ensures that every project looks
              and feels perfect.
            </p>
          </div>
        </div>
      </section>

       </div>
       </div>

  )
}
