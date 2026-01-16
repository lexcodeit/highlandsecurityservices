const CEOInvitation = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white p-10 lg:p-16 shadow-xl rounded-sm border-t-8 border-primary-gold">
                    {/* Letter Header */}
                    <div className="mb-12 border-b border-slate-100 pb-8">
                        <h2 className="text-primary-gold font-bold uppercase tracking-[0.2em] mb-2">
                            A Message from our Leadership
                        </h2>
                        <h3 className="text-3xl font-bold text-slate-900 font-outfit">
                            Invitation to Professional Partnership
                        </h3>
                    </div>

                    {/* Letter Body */}
                    <div className="space-y-6 text-gray-700 leading-relaxed font-dm-sans">
                        <p>
                            We are pleased to introduce our company **HIGHLAND
                            SECURITY SERVICES LIMITED** to you and your highly
                            esteemed company and to express our interest to be
                            your security provider.
                        </p>

                        <p>
                            HSSL is a proactive corporate security and safety
                            outfit with clients in the banking sector,
                            telecommunication, hotels, schools, oil and gas, and
                            government agencies. We understand that having a
                            security guard is not enough. You need assurance
                            that each guard employed is backed by a dedicated
                            and qualified support team.
                        </p>

                        <p>
                            Our commitment to creating the safest possible
                            environment has earned us a reputation for
                            excellence and long-term client relationships. We
                            provide comprehensive security solutions in
                            accordance with your specific circumstances, taking
                            protection to the next level because **Your Safety
                            Is Our First Priority.**
                        </p>

                        <p className="font-medium">
                            We look forward to your invitation at the earliest
                            convenient time for further discussion on this
                            proposal to enable us do business with your
                            organization.
                        </p>
                    </div>

                    {/* Signature Section */}
                    <div className="mt-12 pt-8">
                        <p className="text-slate-900 font-semibold mb-1">
                            Yours Sincerely,
                        </p>
                        <p className="text-2xl font-brush-script text-primary-gold mb-1">
                            Dr Ade Omishore
                        </p>
                        <p className="text-slate-900 font-bold uppercase tracking-wider text-sm">
                            CHAIRMAN / CEO
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CEOInvitation;
