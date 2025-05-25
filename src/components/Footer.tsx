import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-[#15111B] w-screen">
      {/* Gradient overlay */}


      <footer className="text-white py-16 border-t border-gray-800 relative z-10 overflow-hidden w-full">
        <div className="w-full mx-auto px-4 sm:px-12 lg:px-24">
        <div
        className="absolute left-1/2 -translate-x-1/2 z-0 top-[-100px]"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          filter: 'blur(300px)',
          background: 'radial-gradient(circle at center, #883FE6 0%, #6F01FE 60%, transparent 80%)',
          opacity: 0.4,
        }}
      />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo and Social Links */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <Image src="/logo.svg" alt="CleverCards" width={150} height={40} />
              </div>
              <p className="text-gray-400 mb-4">Follow us on:</p>
              <div className="flex gap-4">
                <Link href="https://instagram.com" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </Link>
                <Link href="https://facebook.com" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </Link>
                <Link href="https://youtube.com" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </Link>
              </div>
            </div>

            {/* Products */}
            <div className="md:col-span-2 z-10">
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><Link href="/employee-gift-cards" className="text-gray-400 hover:text-white">Employee Gift Cards</Link></li>
                <li><Link href="/business-expense-card" className="text-gray-400 hover:text-white">Business Expense Card</Link></li>
                <li><Link href="/subscription-card" className="text-gray-400 hover:text-white">The Subscription Card</Link></li>
                <li><Link href="/employee-benefits" className="text-gray-400 hover:text-white">Employee Benefits</Link></li>
                <li><Link href="/employee-allowances" className="text-gray-400 hover:text-white">Employee Allowances</Link></li>
                <li><Link href="/travel-expense-cards" className="text-gray-400 hover:text-white">Travel Expense Cards</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="md:col-span-2 z-10">
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/business-account-login" className="text-gray-400 hover:text-white">Business Account Login</Link></li>
                <li><Link href="/faqs" className="text-gray-400 hover:text-white">FAQs</Link></li>
                <li><Link href="/help-center" className="text-gray-400 hover:text-white">Help center</Link></li>
                <li><Link href="/referral-program" className="text-gray-400 hover:text-white">Referral Program</Link></li>
                <li><Link href="/apple-pay" className="text-gray-400 hover:text-white">Apple Pay</Link></li>
                <li><Link href="/news" className="text-gray-400 hover:text-white">News</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div className="md:col-span-2 z-10">
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/legal" className="text-gray-400 hover:text-white">Legal</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/cookie-policy" className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
                <li><Link href="/contact-us" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                <li><Link href="/cookie-settings" className="text-gray-400 hover:text-white">Cookie Settings</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="md:col-span-4 z-10">
              <h3 className="text-lg font-semibold mb-4">Get Started with CleverCards</h3>
              <p className="text-gray-400 mb-6">Sign up to our mailing list below and be the first to know about new updates. Don&apos;t worry, we hate spam too.</p>
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-1 px-4 py-2 bg-white/10 rounded-full focus:outline-none focus:border-purple-500"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#6F01FED1] text-white rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap"
                >
                  Get Notified
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full border-t border-gray-800 mt-10 pt-8 z-10">
          <div className="w-full mx-auto px-4 sm:px-12 lg:px-24">
            <p className="text-gray-400 text-sm">
              © 2025 CleverCards All rights reserved
            </p>
            <p className="text-gray-400 text-sm mt-4">
              CleverCards Mastercards are issued by Monavate pursuant to license by Mastercard International Incorporated. Monavate is authorised by the FCA and BoL as an Electronic Money Institution and regulated by the Central Bank of Ireland for conduct of business rules. CleverCards is certified by Mastercard, Apple Pay and Google Pay. Terms & Conditions apply.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;