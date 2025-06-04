import PricingCard from './PricingCard';

function App() {
  const pricingPlans = [
    {
      plan: 'Standard',
      price: '$100',
      features: [
        '50,000 Requests',
        '4 contributors',
        'Up to 3 GB storage space',
      ],
      isFeatured: false,
    },
    {
      plan: 'Pro',
      price: '$200',
      features: [
        '100,000 Requests',
        '7 contributors',
        'Up to 6 GB storage space',
      ],
      isFeatured: true,
    },
    {
      plan: 'Expert',
      price: '$500',
      features: [
        '200,000 Requests',
        '11 contributors',
        'Up to 10 GB storage space',
      ],
      isFeatured: false,
    },
  ];

  return (
    <div className='min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4'>
      <h1 className='text-3xl font-bold text-white mb-10'>Pricing</h1>
      <div className='flex flex-col sm:flex-row gap-5 w-full max-w-5xl justify-center items-center'>
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan.plan}
            price={plan.price}
            features={plan.features}
            isFeatured={plan.isFeatured}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
