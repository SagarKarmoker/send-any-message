"use client";
import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow-lg mt-10">
            <h1 className="text-4xl font-semibold text-gray-800">Privacy Policy</h1>
            <p className="text-gray-600 text-lg">
                This Privacy Policy outlines how we collect, use, and protect your information. By using our website or services, you agree to the terms outlined below.
            </p>

            {/* Section 1: Information We Collect */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">1. Information We Collect</h2>
                <p className="text-gray-600">
                    We collect personal information that you provide to us when you use our website or services. This may include your name, email address, and other details necessary for registration or usage.
                </p>
                <p className="text-gray-600">
                    Additionally, we may collect non-personal information like browser type, IP address, and other details to improve our services.
                </p>
            </section>

            {/* Section 2: How We Use Your Information */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">2. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>To personalize your experience on our website</li>
                    <li>To communicate with you regarding updates, offers, and customer support</li>
                    <li>To improve our services and website functionality</li>
                </ul>
            </section>

            {/* Section 3: How We Protect Your Information */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">3. How We Protect Your Information</h2>
                <p className="text-gray-600">
                    We use industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
            </section>

            {/* Section 4: Sharing Your Information */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">4. Sharing Your Information</h2>
                <p className="text-gray-600">
                    We do not share your personal information with third parties except in the following cases:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>With your consent</li>
                    <li>If required by law or to protect our legal rights</li>
                    <li>To trusted third-party service providers who assist us in operating our services</li>
                </ul>
            </section>

            {/* Section 5: Your Rights and Choices */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">5. Your Rights and Choices</h2>
                <p className="text-gray-600">
                    You have the right to access, update, or delete your personal information. You can manage your privacy preferences by contacting us directly.
                </p>
            </section>

            {/* Section 6: Changes to This Privacy Policy */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">6. Changes to This Privacy Policy</h2>
                <p className="text-gray-600">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the updated policy will be effective immediately upon posting.
                </p>
            </section>

            {/* Section 7: Contact Us */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">7. Contact Us</h2>
                <p className="text-gray-600">
                    If you have any questions or concerns about this Privacy Policy, please feel free to contact us at:
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
