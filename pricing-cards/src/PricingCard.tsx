import React from 'react';

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  plan, 
  price, 
  features, 
  isFeatured = false 
}) => {
  return (
    <div 
      className={`
        group
        flex flex-col
        w-full max-w-sm
        rounded-lg overflow-hidden
        bg-white text-slate-800
        transition-all duration-300 ease-in-out
        sm:transform hover:scale-105 hover:shadow-xl
        hover:bg-slate-700 hover:text-white
        focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-400
        ${isFeatured ? 'z-10 shadow-lg' : ''}
      `}
      tabIndex={0}
    >
      <div className="p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">{plan}</h3>
        <p className="text-5xl font-bold mb-0">{price}</p>
      </div>
      
      <div className="flex-grow flex flex-col">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="py-4 px-6 text-center border-t border-slate-200 group-hover:border-slate-600"
          >
            {feature}
          </div>
        ))}
      </div>
      
      <div className="p-8 text-center">
        <button
          className={`
            uppercase font-semibold py-2 px-6
            rounded transition-colors duration-300
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
            bg-slate-700 text-white
            group-hover:bg-white group-hover:text-slate-700
          `}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default PricingCard;