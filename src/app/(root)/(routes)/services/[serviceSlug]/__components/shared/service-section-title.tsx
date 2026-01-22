interface Props {
    title: string;
    subtitle: string;
}

const ServiceSectionTitle = ({ subtitle, title }: Props) => {
    return (
        <div className="text-center mb-16">
            <h2 className="text-primary-gold font-bold uppercase tracking-widest text-sm mb-4">
                {title}
            </h2>
            <h3 className="text-4xl font-bold font-outfit text-slate-900">
                {subtitle}
            </h3>
        </div>
    );
};

export default ServiceSectionTitle;
