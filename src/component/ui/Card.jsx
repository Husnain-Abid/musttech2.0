import { Link } from "react-router-dom";

export default function Card({ service }) {
  return (
     <Link to={`${service.to}`}  className="group rounded border border-[#A1AEBF] p-5 transition-all duration-300 hover:border-red-500">
      <div className="mb-3 inline-block rounded-lg   ">
        {/* <service.icon className="h-6 w-6" /> */}
        <img
          src={`/images/services/${service.icon}.svg`} // Use the image path from the array
          alt={`Logo ${service.title}`} // Unique alt text for accessibility
          width={48} // Set desired width
          height={48} // Set desired height
        />
      </div>
      <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
      <p className="text-white/60 text-sm">{service.description}</p>
    </Link>
  );
}
