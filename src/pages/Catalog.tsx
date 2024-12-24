import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark } from 'lucide-react';

const categories = [
  {
    id: 'our-works',
    title: 'Наши работы',
    image: 'https://i.ibb.co/tc706m3/16.jpg',
  },
  {
    id: 'granite',
    title: 'Гранитные памятники',
    image: 'https://i.ibb.co/XyxCGgF/1.png',
  },
  {
    id: 'marble',
    title: 'Мраморные памятники',
    image: 'https://i.ibb.co/SQJb0fp/3.png',
  },
  {
    id: 'monument',
    title: 'Металические памятники',
    image: 'https://i.ibb.co/mXtBHY6/1.png',
  },
  {
    id: 'tables',
    title: 'Столы',
    image: 'https://i.ibb.co/7JmkVjL/3.png',
  },
  {
    id: 'fences',
    title: 'Ограды',
    image: 'https://i.ibb.co/fQ57mJg/23.png',
  },
  {
    id: 'crosses',
    title: 'Кресты',
    image: 'https://i.ibb.co/Mkv8sJ2/1.png',
  },
  {
    id: 'bences',
    title: 'Лавочки',
    image: 'https://i.ibb.co/JjzS2bv/1.png',
  },
  {
    id: 'gravestones',
    title: 'Надгробия',
    image: 'https://i.ibb.co/PWM5TQn/1.png',
  },
  {
    id: 'crosses-gravestones',
    title: 'Крест-Надгробия',
    image: 'https://i.ibb.co/SKNPtYG/2.png',
  },
  {
    id: 'monuments-gravestones',
    title: 'Памятник-Надгробия',
    image: 'https://i.ibb.co/CVg9ZPc/10.png',
  },
];

export function Catalog() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="glass-container p-8 mb-12">
          <h1 className="text-4xl font-bold mb-4">Каталог продукции</h1>
          <p className="text-gray-300 text-lg">
            Широкий выбор памятников и ритуальных изделий высокого качества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/catalog/${category.id}`}
              className="glass-container group overflow-hidden"
            >
              <div className="aspect-square relative">
                <div className="absolute inset-0 product-image-bg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center text-white">
                    <Bookmark className="w-5 h-5 mr-2" />
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}