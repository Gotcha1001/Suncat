import React from 'react';

export default function DataProtectionPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                    <h1 className="text-4xl font-bold mb-4">DATA PROTECTION POLICY</h1>
                    <p className="mb-4"><strong>July 2024</strong></p>

                    <div className="bg-gray-100 p-4 mb-4 rounded-lg">
                        <h2 className="text-2xl font-bold mb-2">1. Introduction</h2>
                        <p>
                            Thashin, trading as Suncat Warehouse, is committed to protecting the personal data of our customers, partners, and employees. This policy outlines our commitment to data protection, ensuring compliance with the Protection of Personal Information Act (POPIA) and other relevant legislation in South Africa.
                        </p>
                    </div>

                    <div className="bg-gray-100 p-4 mb-4 rounded-lg">
                        <h2 className="text-2xl font-bold mb-2">2. Purpose of Data Processing</h2>
                        <ul className="list-disc list-inside">
                            <li>Processing orders and managing customer accounts.</li>
                            <li>Providing personalized customer support and services.</li>
                            <li>Communicating with customers regarding their orders and inquiries.</li>
                            <li>Improving our services and website functionality.</li>
                            <li>Complying with legal obligations and responding to inquiries and complaints.</li>
                        </ul>
                    </div>

                    <div className="bg-gray-100 p-4 mb-4 rounded-lg">
                        <h2 className="text-2xl font-bold mb-2">3. Legal Basis for Processing</h2>
                        <p>
                            All processing of personal data is conducted lawfully under POPIA. We obtain explicit consent from users for specific processing activities, including marketing communications and the use of cookies on our website.
                        </p>
                    </div>

                    <div className="bg-gray-100 p-4 mb-4 rounded-lg">
                        <h2 className="text-2xl font-bold mb-2">4. Data Protection Principles</h2>
                        <ul className="list-disc list-inside">
                            <li>Lawfulness, Fairness, and Transparency: Data is processed with user consent and in a transparent manner.</li>
                            <li>Purpose Limitation: Personal data is collected for specified, explicit, and legitimate purposes related to our business operations.</li>
                            <li>Data Minimization: We collect only the minimum amount of personal data necessary for our purposes.</li>
                            <li>Accuracy: Users are encouraged to keep their information accurate and up to date.</li>
                            <li>Storage Limitation: Personal data is kept only for as long as necessary for the purposes for which it was collected.</li>
                            <li>Integrity and Confidentiality: We implement appropriate technical and organizational measures to ensure the security and confidentiality of personal data.</li>
                        </ul>
                    </div>

                    <div className="bg-gray-100 p-4 mb-4 rounded-lg">
                        <h2 className="text-2xl font-bold mb-2">5. Roles and Responsibilities</h2>
                        <p>
                            <strong>Data Controller:</strong> Thashlin is responsible for overseeing compliance with this policy and applicable data protection laws.<br />
                            <strong>Data Processor:</strong> All employees and contractors processing personal data on behalf of Suncat Warehouse must comply with this policy and relevant data protection laws.
                        </p>
                    </div>

                    <div className="bg-gray-100 p-4 mb-4 rounded-lg">
                        <h2 className="text-2xl font-bold mb-2">6. Data Subjects' Rights</h2>
                        <p>
                            Users have the right to access, rectify, and erase their personal data, as well as to restrict or object to its processing. Requests related to these rights should be directed to our Information Officer.
                        </p>
                    </div>

                    <div className="bg-gray-100 p-4 mb-4 rounded-lg">
                        <h2 className="text-2xl font-bold mb-2">7. Cybersecurity and Data Breach Management</h2>
                        <p>
                            We maintain robust cybersecurity measures to protect against unauthorized access, alteration, disclosure, or destruction of personal data. Procedures are in place to detect, investigate, and respond to data breaches promptly.
                        </p>
                    </div>

                    <div className="bg-gray-100 p-4 mb-4 rounded-lg">
                        <h2 className="text-2xl font-bold mb-2">8. Website, Cookies, and Marketing</h2>
                        <p>
                            Our website collects personal information in compliance with data protection laws, ensuring transparency in data processing practices. Users are informed about the use of cookies and have the option to manage cookie preferences.
                        </p>
                    </div>

                    <div className="bg-gray-100 p-4 mb-4 rounded-lg">
                        <h2 className="text-2xl font-bold mb-2">9. Policy Review and Updates</h2>
                        <p>
                            This policy is reviewed regularly to ensure ongoing compliance with data protection laws and best practices. Updates are communicated to employees and users as necessary.
                        </p>
                    </div>

                    <div className="bg-gray-100 p-4 mb-4 rounded-lg">
                        <h2 className="text-2xl font-bold mb-2">10. Contact Information</h2>
                        <p>
                            For questions regarding this policy or to exercise your data protection rights, please contact our Information Officer at <a href="mailto:info@suncatwarehouse.com">info@suncat.co.za</a>.
                        </p>
                        <p>Signature:</p>
                        <img src="/thashsig.jpg" alt="Signature" className="signature-image" />
                    </div>

                </div>
            </div>
        </div>
    );
}
