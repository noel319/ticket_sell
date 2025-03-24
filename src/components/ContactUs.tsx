import { MapPin, Mail, Phone } from 'lucide-react';

const ContactUs = () => {
  return (
    <section id='contact' className="py-20 bg-gradient-to-b from-zinc-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8">
                Have questions about our tours, merchandise, or anything else? We'd love to hear from you!
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="text-purple-400" />
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p className="text-gray-400">123 Music Avenue, Los Angeles, CA 90028</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-purple-400" />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-400">info@soundwave.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-purple-400" />
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-900/50 p-8 rounded-lg backdrop-blur">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-400 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-400 text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-400 text-white"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-400 text-white resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 py-3 rounded-full hover:bg-purple-700 transition font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;