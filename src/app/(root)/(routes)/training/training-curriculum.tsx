const TrainingCurriculum = () => {
    const courses = [
        { title: "Introduction to Security Industry", in: 3, out: 1 },
        {
            title: "Private Security & Investigative Services Act",
            in: 4,
            out: 1,
        },
        { title: "Basic Security Procedures", in: 3, out: 5 },
        { title: "Report Writing", in: 4, out: 0.5 },
        { title: "Emergency Response Preparation", in: 7, out: 1 },
        { title: "Effective Communication", in: 4, out: 3 },
        { title: "Sensitive Training", in: 3, out: 2 },
        { title: "Use of Force Theory", in: 2, out: 2 },
        { title: "Emergency Level First Aid", in: 3.5, out: 0 },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary-gold font-bold uppercase tracking-widest mb-4">
                        Training Content
                    </h2>
                    <h3 className="text-4xl font-bold font-outfit">
                        HSSL Professional Development
                    </h3>
                    <p className="mt-4 text-gray-600">
                        The minimum length of basic training is no less than 40
                        hours.
                    </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white">
                                <th className="p-4 font-outfit">
                                    Training Content
                                </th>
                                <th className="p-4 font-outfit">
                                    Inside Class (Hrs)
                                </th>
                                <th className="p-4 font-outfit">
                                    Outside Class (Hrs)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course, i) => (
                                <tr
                                    key={i}
                                    className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                                >
                                    <td className="p-4 font-medium text-slate-800">
                                        {course.title}
                                    </td>
                                    <td className="p-4 text-slate-600">
                                        {course.in}
                                    </td>
                                    <td className="p-4 text-slate-600">
                                        {course.out}
                                    </td>
                                </tr>
                            ))}
                            <tr className="bg-slate-50 font-bold">
                                <td className="p-4">Total Program Hours</td>
                                <td className="p-4">33.5</td>
                                <td className="p-4">15.5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default TrainingCurriculum;
