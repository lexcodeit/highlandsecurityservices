import React from "react";

const MapEmbed = () => {
    return (
        <div className=" h-[500px] py-12">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.03721018128!2d3.361668174232774!3d6.642301521772945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b938e0652b6bf%3A0xd576d46195f988c6!2s30%20Sule%20Abore%20Street%2C%20Ojodu%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1762167419659!5m2!1sen!2sng"
                style={{
                    border: 0,
                }}
                allowFullScreen
                loading="lazy"
                width="100%"
                height="100%"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default MapEmbed;
