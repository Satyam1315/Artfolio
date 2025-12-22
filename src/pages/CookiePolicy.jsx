import { Link } from "react-router-dom";
import { ArrowLeft, Cookie, Settings, Eye, Shield, Info, CheckCircle } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
              <Cookie className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">Cookie Policy</h1>
          </div>
          <p className="text-gray-600">Last updated: November 15, 2025</p>
        </div>

        {/* Quick Overview */}
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            What Are Cookies?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Cookies are small text files that are placed on your device when you visit our website. 
            They help us provide you with a better experience by remembering your preferences and 
            understanding how you use our service.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Info className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                How We Use Cookies
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                ArtFolio uses cookies to enhance your experience and provide personalized content. 
                Cookies help us understand how visitors interact with our website, allowing us to 
                improve our services and provide features you find useful.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Types of Cookies We Use
              </h2>
            </div>
            <div className="space-y-6">
              {/* Essential Cookies */}
              <div className="p-6 rounded-xl border border-gray-200 hover:border-gray-900 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-gray-900 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Essential Cookies (Required)
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      These cookies are necessary for the website to function properly. 
                      They enable core functionality such as security, authentication, and accessibility.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                      <li>Authentication and login status</li>
                      <li>Security and fraud prevention</li>
                      <li>Session management</li>
                      <li>Load balancing</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="p-6 rounded-xl border border-gray-200 hover:border-gray-900 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <Settings className="w-6 h-6 text-gray-900 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Functional Cookies
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      These cookies enable enhanced functionality and personalization, such as 
                      remembering your preferences and settings.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                      <li>Language preferences</li>
                      <li>Theme selection (dark/light mode)</li>
                      <li>Layout preferences</li>
                      <li>User interface customization</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="p-6 rounded-xl border border-gray-200 hover:border-gray-900 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <Eye className="w-6 h-6 text-gray-900 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Analytics Cookies
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      These cookies help us understand how visitors interact with our website by 
                      collecting and reporting information anonymously.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                      <li>Page views and visitor counts</li>
                      <li>Traffic sources</li>
                      <li>User behavior patterns</li>
                      <li>Performance metrics</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="p-6 rounded-xl border border-gray-200 hover:border-gray-900 transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="w-6 h-6 text-gray-900 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Marketing Cookies
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      These cookies are used to track visitors across websites to display relevant 
                      advertisements and measure campaign effectiveness.
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                      <li>Personalized advertising</li>
                      <li>Retargeting campaigns</li>
                      <li>Social media integration</li>
                      <li>Ad performance tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Settings className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Managing Your Cookie Preferences
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                You have the right to accept or reject cookies. You can manage your cookie 
                preferences through:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Browser Settings</h4>
                  <p className="text-sm leading-relaxed">
                    Most web browsers allow you to control cookies through their settings. 
                    Visit your browser's help section to learn how to adjust cookie settings.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Cookie Consent Tool</h4>
                  <p className="text-sm leading-relaxed">
                    When you first visit our website, you'll see a cookie consent banner where 
                    you can customize your preferences for different types of cookies.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Account Settings</h4>
                  <p className="text-sm leading-relaxed">
                    If you have an account, you can manage some cookie-related preferences 
                    in your account settings dashboard.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mt-6">
                <p className="text-amber-900 text-sm leading-relaxed">
                  <strong>Note:</strong> Blocking or deleting certain cookies may impact your 
                  experience on our website. Some features may not function properly without cookies.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Third-Party Cookies
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                We may use third-party services that set cookies on our website. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> To analyze website traffic and user behavior
                </li>
                <li>
                  <strong>Social Media Platforms:</strong> For social sharing and authentication features
                </li>
                <li>
                  <strong>Payment Processors:</strong> For secure payment processing
                </li>
                <li>
                  <strong>CDN Providers:</strong> For content delivery and performance optimization
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                These third parties have their own privacy policies. We recommend reviewing their 
                policies to understand how they use cookies and your data.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Info className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Cookie Duration
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Cookies can be either session cookies or persistent cookies:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Session Cookies</h4>
                  <p className="text-sm leading-relaxed">
                    Temporary cookies that are deleted when you close your browser. 
                    Used for essential functionality during your visit.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">Persistent Cookies</h4>
                  <p className="text-sm leading-relaxed">
                    Remain on your device for a set period or until manually deleted. 
                    Used to remember your preferences across visits.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Settings className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Updates to This Policy
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our 
                practices or for legal, operational, or regulatory reasons. We will notify you 
                of any significant changes by updating the "Last updated" date at the top of 
                this policy.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Info className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="text-gray-700 mb-4">
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong> privacy@artfolio.com
                </p>
                <p>
                  <strong>Address:</strong> 123 Creative Street, San Francisco, CA 94102
                </p>
                <p>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link
              to="/terms"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              to="/privacy"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              to="/license"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              License
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
