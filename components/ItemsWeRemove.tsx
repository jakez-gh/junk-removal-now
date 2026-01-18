interface ItemCategory {
  name: string;
  icon: string;
  examples: string;
}

const items: ItemCategory[] = [
  {
    name: 'Furniture',
    icon: '🛋️',
    examples: 'Sofas, chairs, tables, beds',
  },
  {
    name: 'Appliances',
    icon: '❄️',
    examples: 'Refrigerators, washers, dryers',
  },
  {
    name: 'Electronics',
    icon: '📺',
    examples: 'TVs, computers, monitors',
  },
  {
    name: 'Mattresses',
    icon: '🛏️',
    examples: 'All sizes, box springs',
  },
  {
    name: 'Yard Waste',
    icon: '🌳',
    examples: 'Branches, debris, equipment',
  },
  {
    name: 'Construction',
    icon: '🔨',
    examples: 'Drywall, lumber, fixtures',
  },
  {
    name: 'Office Items',
    icon: '🗄️',
    examples: 'Desks, cabinets, equipment',
  },
  {
    name: 'Hot Tubs',
    icon: '🛁',
    examples: 'Spas, pools, equipment',
  },
  {
    name: 'Exercise Equipment',
    icon: '🏋️',
    examples: 'Treadmills, weights, bikes',
  },
  {
    name: 'General Junk',
    icon: '📦',
    examples: 'Boxes, clutter, misc items',
  },
  {
    name: 'Storage Units',
    icon: '🏠',
    examples: 'Sheds, cleanouts',
  },
  {
    name: 'Estate Cleanouts',
    icon: '🏘️',
    examples: 'Full property clearing',
  },
];

export default function ItemsWeRemove() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">What We Remove</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We haul away just about anything! From single items to complete property cleanouts.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center"
            >
              <div className="text-5xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.examples}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-700 mb-4">
            <strong>Don&apos;t see your item?</strong> Give us a call - we handle most items!
          </p>
          <p className="text-sm text-gray-600">
            *We cannot accept hazardous materials, medical waste, or items requiring special permits
          </p>
        </div>
      </div>
    </section>
  );
}
