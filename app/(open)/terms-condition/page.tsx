"use client";
import React from 'react';

export default function TermsAndCondition() {
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow-lg mt-10">
            <h1 className="text-4xl font-semibold text-gray-800">Terms and Conditions</h1>
            <p className="text-gray-600 text-lg">
                Welcome to our website. These terms and conditions outline the rules and regulations for the use of our website and services.
            </p>

            {/* Section 1: Introduction */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">1. Introduction</h2>
                <p className="text-gray-600">
                    By accessing or using our website, you agree to comply with these Terms and Conditions. If you do not agree with these terms, you must not use our services.
                </p>
            </section>

            {/* Section 2: User Obligations */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">2. User Obligations</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>You must be at least 18 years old to use our services.</li>
                    <li>You agree to provide accurate and complete information during registration.</li>
                    <li>You are responsible for maintaining the confidentiality of your account information.</li>
                </ul>
            </section>

            {/* Section 3: Usage Rules */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">3. Usage Rules</h2>
                <p className="text-gray-600">
                    You agree not to misuse our website or services. This includes but is not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Engaging in illegal activities</li>
                    <li>Spamming or sending unsolicited messages</li>
                    <li>Interfering with the proper functioning of the website</li>
                </ul>
            </section>

            {/* Section 4: Intellectual Property */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">4. Intellectual Property</h2>
                <p className="text-gray-600">
                    All content, trademarks, and intellectual property on this website are the property of the company or its licensors. You may not use, copy, or distribute any of our content without permission.
                </p>
            </section>

            {/* Section 5: Limitation of Liability */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">5. Limitation of Liability</h2>
                <p className="text-gray-600">
                    We do not accept any liability for damages or losses arising from the use of our website or services. By using our website, you agree to do so at your own risk.
                </p>
            </section>

            {/* Section 6: Termination */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">6. Termination</h2>
                <p className="text-gray-600">
                    We may suspend or terminate your access to the website at our discretion if we believe you have violated any of these terms.
                </p>
            </section>

            {/* Section 7: Governing Law */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">7. Governing Law</h2>
                <p className="text-gray-600">
                    These terms are governed by the laws of [your country or region]. Any disputes will be resolved in the appropriate courts in [your country or region].
                </p>
            </section>

            {/* Section 8: Changes to Terms */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">8. Changes to These Terms</h2>
                <p className="text-gray-600">
                    We reserve the right to update or modify these terms at any time. Any changes will be posted on this page, and the updated terms will be effective immediately.
                </p>
            </section>

            {/* Section 9: Contact Us */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">9. Contact Us</h2>
                <p className="text-gray-600">
                    If you have any questions or concerns about these Terms and Conditions, please contact us at:
                </p>
                <p className="text-gray-600">
                    Email: <span className="text-blue-600">me@sagarkarmoker.co</span>
                </p>
            </section>

            <div className="border-t border-gray-200 pt-6 mt-6 text-center text-gray-500 text-sm">
                <p>&copy; 2024 Send Any Message. All rights reserved.</p>
            </div>
        </div>
    );
}
