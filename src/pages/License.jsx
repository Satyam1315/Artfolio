import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Check, X, AlertCircle, Scale } from "lucide-react";

const License = () => {
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
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">License Agreement</h1>
          </div>
          <p className="text-gray-600">ArtFolio Software License - Version 1.0</p>
          <p className="text-gray-600">Effective Date: November 15, 2025</p>
        </div>

        {/* Quick Overview */}
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            License Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This license grants you the right to use ArtFolio's software and services 
            according to the terms outlined below. By using our service, you agree to 
            comply with this license agreement.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Scale className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                1. Grant of License
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Subject to your compliance with this Agreement, ArtFolio grants you a limited, 
                non-exclusive, non-transferable, revocable license to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and use the ArtFolio platform for your personal or business portfolio needs</li>
                <li>Upload, store, and display your creative content through our service</li>
                <li>Share your portfolio with others via the platform's built-in sharing features</li>
                <li>Use our templates, tools, and features according to your subscription plan</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Check className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                2. Permitted Uses
              </h2>
            </div>
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <Check className="w-5 h-5" />
                You MAY:
              </h3>
              <ul className="space-y-2 text-green-900">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 shrink-0" />
                  <span>Create and manage your personal or business portfolio</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 shrink-0" />
                  <span>Upload your original creative work and content</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 shrink-0" />
                  <span>Customize your portfolio using available templates and tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 shrink-0" />
                  <span>Share your portfolio URL with clients and contacts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 shrink-0" />
                  <span>Use our service for commercial purposes (showcasing work to clients)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 shrink-0" />
                  <span>Export your data according to your subscription plan</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <X className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                3. Restrictions
              </h2>
            </div>
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                <X className="w-5 h-5" />
                You MAY NOT:
              </h3>
              <ul className="space-y-2 text-red-900">
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 mt-1 shrink-0" />
                  <span>Copy, modify, or create derivative works of our software</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 mt-1 shrink-0" />
                  <span>Reverse engineer, decompile, or disassemble the platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 mt-1 shrink-0" />
                  <span>Remove, alter, or obscure any copyright or trademark notices</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 mt-1 shrink-0" />
                  <span>Resell, lease, or sublicense access to the service</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 mt-1 shrink-0" />
                  <span>Use the service to create a competing product or service</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 mt-1 shrink-0" />
                  <span>Scrape, crawl, or use automated tools to extract data</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 mt-1 shrink-0" />
                  <span>Upload malicious code, viruses, or harmful content</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-4 h-4 mt-1 shrink-0" />
                  <span>Share your account credentials with others</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                4. Content Ownership
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Your Content</h3>
                <p className="leading-relaxed">
                  You retain all ownership rights to the content you upload to ArtFolio. 
                  By uploading content, you grant us a limited license to store, display, 
                  and distribute your content solely for the purpose of providing our services.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Our Content</h3>
                <p className="leading-relaxed">
                  All aspects of the ArtFolio platform, including but not limited to design, 
                  code, templates, features, and documentation, are owned by ArtFolio and 
                  protected by copyright, trademark, and other intellectual property laws.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                5. Subscription Plans
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Your license rights may vary depending on your subscription plan:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-gray-200 hover:border-gray-900 transition-all">
                  <h4 className="font-bold text-gray-900 mb-2">Free Plan</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Limited projects</li>
                    <li>• Basic features</li>
                    <li>• ArtFolio branding</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl border border-gray-900 bg-gray-50">
                  <h4 className="font-bold text-gray-900 mb-2">Pro Plan</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Unlimited projects</li>
                    <li>• Advanced features</li>
                    <li>• Remove branding</li>
                    <li>• Custom domain</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl border border-gray-200 hover:border-gray-900 transition-all">
                  <h4 className="font-bold text-gray-900 mb-2">Team Plan</h4>
                  <ul className="text-sm space-y-1">
                    <li>• All Pro features</li>
                    <li>• Team collaboration</li>
                    <li>• API access</li>
                    <li>• White-label option</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Scale className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                6. Termination
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                This license is effective until terminated. Your rights under this license 
                will terminate automatically without notice if you fail to comply with any term.
              </p>
              <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                <h4 className="font-bold text-amber-900 mb-2">Upon Termination:</h4>
                <ul className="text-sm space-y-2 text-amber-900">
                  <li>• You must cease all use of the ArtFolio platform</li>
                  <li>• Your access to the service will be revoked</li>
                  <li>• You may export your content before termination (based on plan)</li>
                  <li>• Certain provisions of this agreement will survive termination</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                7. Warranty Disclaimer
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM 
                EXTENT PERMITTED BY LAW, ARTFOLIO DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, 
                INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR 
                A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                8. Limitation of Liability
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, ARTFOLIO SHALL NOT BE LIABLE FOR ANY 
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS 
                OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF 
                DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Scale className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                9. Governing Law
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                This License Agreement shall be governed by and construed in accordance with the 
                laws of the State of California, United States, without regard to its conflict 
                of law provisions. Any dispute arising from this agreement shall be subject to 
                the exclusive jurisdiction of the courts in San Francisco, California.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="text-gray-700 mb-4">
                For questions about this License Agreement, please contact:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong> legal@artfolio.com
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

        {/* Acknowledgment */}
        <div className="mt-12 p-6 bg-gray-900 text-white rounded-2xl">
          <p className="text-sm leading-relaxed">
            By using ArtFolio, you acknowledge that you have read, understood, and agree to be 
            bound by this License Agreement. If you do not agree to these terms, you must not 
            access or use our service.
          </p>
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
              to="/cookies"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default License;
