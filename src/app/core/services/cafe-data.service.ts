import { Injectable } from '@angular/core';
import {
  MenuCategory,
  HoursEntry,
  MoodCard,
  GalleryImage,
  ContactInfo
} from '../models/cafe.models';

@Injectable({ providedIn: 'root' })
export class CafeDataService {

  readonly contact: ContactInfo = {
    address: 'Kallidromiou 58, Exarchia',
    addressLine2: 'Athens, 10683, Greece',
    phone: '+30 210 384 5520',
    phoneHref: 'tel:+302103845520',
    email: 'hello@botanica-athens.gr',
    mapsUrl: 'https://maps.google.com/?q=Kallidromiou+58+Exarchia+Athens+Greece',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.112345!2d23.7340!3d37.9880!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd5f8d7c5d5b%3A0x0!2sExarchia%2C+Athens%2C+Greece!5e0!3m2!1sen!2sgr!4v1700000000004!5m2!1sen!2sgr'
  };

  readonly menuCategories: MenuCategory[] = [
    {
      id: 'coffee',
      label: 'Coffee & Drinks',
      items: [
        { name: 'Botanica Signature Pour', description: 'Single origin Ethiopian, hand-poured over botanicals, served cold', price: '€5.50' },
        { name: 'Wild Rose Latte',         description: 'Oat milk, rose hip syrup, cardamom, ceremonial matcha',             price: '€5.00' },
        { name: 'Forest Mushroom Brew',    description: 'Adaptogenic chaga & lion\'s mane, oat milk, cinnamon, honey',       price: '€5.50' },
        { name: 'Garden Kombucha',         description: 'House-brewed with seasonal botanicals, jasmine, elderflower',       price: '€4.50' },
        { name: 'Natural Wine Glass',      description: 'Rotating selection of low-intervention Greek producers',            price: 'from €7.00' },
        { name: 'Herbal Infusion',         description: 'Fresh herbs from our garden: lavender, mint, lemon verbena',        price: '€4.00' }
      ]
    },
    {
      id: 'food',
      label: 'Seasonal Food',
      items: [
        { name: 'Garden Bowl',             description: 'Seasonal greens, roasted veg, tahini dressing, seeds, herbs',       price: '€12.00' },
        { name: 'Sourdough Toast',         description: 'Long-ferment house loaf, seasonal jam, cultured butter',            price: '€6.00' },
        { name: 'Shakshuka',               description: 'Spiced tomatoes, poached eggs, preserved lemon, feta, pita',        price: '€11.00' },
        { name: 'Mushroom Omelette',       description: 'Forest mushrooms, goat cheese, chives, sourdough soldiers',         price: '€10.00' },
        { name: 'Avocado Tartine',         description: 'House rye, smashed avocado, heritage tomato, pumpkin seeds',        price: '€9.00' },
        { name: 'Seasonal Cake Slice',     description: 'Baker\'s choice of plant-forward whole-grain cakes and tarts',      price: '€5.50' }
      ]
    },
    {
      id: 'brunch',
      label: 'Weekend Brunch',
      items: [
        { name: 'Full Botanica Plate',     description: 'Eggs, seasonal roast veg, mushrooms, feta, sourdough, jam',         price: '€16.00' },
        { name: 'Pancakes with Forest',    description: 'Buckwheat pancakes, blueberry compote, toasted seeds, maple',       price: '€12.00' },
        { name: 'Chia Pudding',            description: 'Coconut milk chia, mango coulis, fresh fruit, granola',             price: '€9.00' },
        { name: 'Green Eggs',             description: 'Herb-marbled scrambled eggs, wild garlic pesto, heritage tomato',    price: '€11.00' },
        { name: 'Brunch Board',           description: 'Selection for two: breads, dips, eggs, seasonal veg, pastry',       price: '€28.00' },
        { name: 'Raw Cacao Tart',         description: '70% cacao ganache, hazelnut base, sea salt, edible flowers',        price: '€6.00' }
      ]
    }
  ];

  readonly hours: HoursEntry[] = [
    { day: 'Monday – Friday', time: '08:00 – 22:00' },
    { day: 'Saturday',        time: '09:00 – 23:00' },
    { day: 'Sunday',          time: '09:00 – 21:00' }
  ];

  readonly moodCards: MoodCard[] = [
    { time: '08:00 – 12:00', title: 'Morning Garden',   description: 'Start slow. A pour-over, fresh air, the garden waking up around you.' },
    { time: '12:00 – 17:00', title: 'Afternoon Light',  description: 'Seasonal bowls, natural wine, the hum of Exarchia through the leaves.' },
    { time: '17:00 – Close', title: 'Golden Hour',      description: 'The garden glows amber. Share a bottle, stay as long as you like.', accent: true }
  ];

  readonly gallery: GalleryImage[] = [
    { url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80', alt: 'Garden café terrace',     tall: true },
    { url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&q=80', alt: 'Seasonal food bowl'                  },
    { url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&q=80',    alt: 'Botanical coffee art'                },
    { url: 'https://images.unsplash.com/photo-1447078806655-40579c2520d6?w=700&q=80', alt: 'Plant-filled interior',  wide: true  },
    { url: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=500&q=80', alt: 'Fresh herbs detail'                  },
    { url: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80', alt: 'Natural wine selection'              }
  ];
}
