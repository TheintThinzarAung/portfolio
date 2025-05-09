import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Mail, Send, Check, AlertTriangle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      
      setTimeout(() => {
        setFormStatus('idle');
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-purple-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <SectionTitle title="Contact Me" subtitle="Let's get in touch" />
        
        <div className="flex justify-center mt-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="w-full max-w-md">
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 h-full text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4 group hover:scale-110 transition-transform duration-300">
                    <Mail className="text-purple-600 dark:text-purple-400 group-hover:animate-bounce-soft" size={22} />
                  </div>
                  <div className="text-center">
                    <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</h4>
                    <a
                      href="mailto:theintthinzaraung1995@gmail.com"
                      className="text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      theintthinzaraung1995@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Connect with me
                </h4>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://linkedin.com/in/theint-thinzar-aung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-5 h-5 group-hover:animate-bounce-soft"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  
                  <a
                    href="https://github.com/TheintThinzarAung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 group"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-5 h-5 group-hover:animate-bounce-soft"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          {/* <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-800 dark:text-white transition-shadow duration-300 hover:shadow-md"
                      placeholder="John Doe"
                      disabled={formStatus === 'submitting' || formStatus === 'success'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-800 dark:text-white transition-shadow duration-300 hover:shadow-md"
                      placeholder="john@example.com"
                      disabled={formStatus === 'submitting' || formStatus === 'success'}
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-800 dark:text-white transition-shadow duration-300 hover:shadow-md"
                    placeholder="Job opportunity, Project collaboration, etc."
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-800 dark:text-white resize-none transition-shadow duration-300 hover:shadow-md"
                    placeholder="Your message here..."
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  className={`inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 ${
                    formStatus === 'submitting'
                      ? 'bg-purple-400 cursor-not-allowed'
                      : formStatus === 'success'
                      ? 'bg-green-500 hover:bg-green-600'
                      : formStatus === 'error'
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                  }`}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <Check size={18} className="mr-2" />
                      Message Sent!
                    </>
                  ) : formStatus === 'error' ? (
                    <>
                      <AlertTriangle size={18} className="mr-2" />
                      Try Again
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;