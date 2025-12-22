import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, Server, UserCheck, Bell } from "lucide-react";

const Privacy = () => {
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
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-gray-600">Last updated: November 15, 2025</p>
        </div>

        {/* Quick Overview */}
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Your Privacy Matters
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At ArtFolio, we take your privacy seriously. This policy outlines how
            we collect, use, and protect your personal information. We are
            committed to transparency and giving you control over your data.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Information We Collect
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Account Information:</strong> Name, email address,
                  password, and profile details
                </li>
                <li>
                  <strong>Content:</strong> Projects, images, descriptions, and
                  other materials you upload
                </li>
                <li>
                  <strong>Payment Information:</strong> Billing details and payment
                  method (processed securely by our payment partners)
                </li>
                <li>
                  <strong>Communications:</strong> Messages you send us and your
                  communication preferences
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                We also automatically collect certain information when you use our
                service:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device and browser information</li>
                <li>IP address and location data</li>
                <li>Usage patterns and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Server className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                How We Use Your Information
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices and support messages</li>
                <li>
                  Respond to your comments, questions, and customer service
                  requests
                </li>
                <li>
                  Communicate with you about products, services, and promotional
                  offers
                </li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues and fraud</li>
                <li>Personalize and improve your experience</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Information Sharing
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                We do not sell your personal information. We may share your
                information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>With your consent:</strong> When you explicitly agree to
                  share information
                </li>
                <li>
                  <strong>Service providers:</strong> With vendors who help us
                  provide our services
                </li>
                <li>
                  <strong>Legal requirements:</strong> When required by law or to
                  protect rights and safety
                </li>
                <li>
                  <strong>Business transfers:</strong> In connection with a merger,
                  sale, or acquisition
                </li>
                <li>
                  <strong>Public content:</strong> Your portfolio and public
                  projects are visible to others as intended
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to
                protect your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Secure cloud infrastructure</li>
                <li>Regular backups and disaster recovery procedures</li>
              </ul>
              <p className="leading-relaxed mt-4">
                However, no method of transmission over the Internet is 100%
                secure. While we strive to protect your information, we cannot
                guarantee absolute security.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Bell className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Access:</strong> Request a copy of your personal data
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct your information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your account and
                  data
                </li>
                <li>
                  <strong>Portability:</strong> Export your data in a portable
                  format
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing
                  communications
                </li>
                <li>
                  <strong>Object:</strong> Object to certain processing of your
                  data
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise these rights, please contact us at privacy@artfolio.com
                or through your account settings.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Cookies and Tracking
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our service</li>
                <li>Improve our website and services</li>
                <li>Provide personalized content and ads</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You can control cookies through your browser settings. However,
                disabling cookies may affect your ability to use certain features.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Children's Privacy
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Our service is not directed to children under 13 years of age. We
                do not knowingly collect personal information from children under
                13. If you are a parent or guardian and believe your child has
                provided us with personal information, please contact us.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Bell className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Changes to This Policy
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                We may update this privacy policy from time to time. We will notify
                you of any changes by posting the new policy on this page and
                updating the "Last updated" date. For significant changes, we will
                provide prominent notice or obtain consent as required by law.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Server className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact
                us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong> privacy@artfolio.com
                </p>
                <p>
                  <strong>Address:</strong> 123 Creative Street, San Francisco, CA
                  94102
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
              to="/features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              to="/pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
