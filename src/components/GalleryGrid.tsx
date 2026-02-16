'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: string;
  title: string;
  shadeType: string;
  roomType: string;
  location: string;
  description: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  { id: '1', title: 'Modern Great Room Motorized Shades', shadeType: 'Motorized', roomType: 'Living Room', location: 'Scottsdale', description: 'Floor-to-ceiling motorized solar shades with Lutron integration in a contemporary home.', image: '/images/gallery/great-room-motorized.jpg' },
  { id: '2', title: 'Blackout Roller Master Suite', shadeType: 'Roller', roomType: 'Bedroom', location: 'Paradise Valley', description: 'Blackout roller shades with cassette valance in a luxury master bedroom.', image: '/images/gallery/blackout-roller-master.webp' },
  { id: '3', title: 'Cellular Shades Family Room', shadeType: 'Cellular', roomType: 'Living Room', location: 'Phoenix', description: 'Double-cell honeycomb shades reducing cooling costs in a west-facing family room.', image: '/images/gallery/cellular-family-room.webp' },
  { id: '4', title: 'Solar Shades Home Office', shadeType: 'Solar', roomType: 'Office', location: 'Tempe', description: '5% openness solar shades eliminating glare while maintaining mountain views.', image: '/images/gallery/solar-home-office.webp' },
  { id: '5', title: 'Roman Shades Dining Room', shadeType: 'Roman', roomType: 'Dining Room', location: 'Scottsdale', description: 'Hobbled fold Roman shades in designer linen fabric for an elegant dining space.', image: '/images/gallery/roman-dining-room.png' },
  { id: '6', title: 'Exterior Patio Drop Shades', shadeType: 'Exterior', roomType: 'Patio', location: 'Chandler', description: 'Motorized cable-guided exterior shades transforming a covered patio into a bug-free retreat.', image: '/images/gallery/exterior-patio-drop.png' },
  { id: '7', title: 'Skylight Motorized Shades', shadeType: 'Motorized', roomType: 'Living Room', location: 'Paradise Valley', description: 'Custom motorized shades for 12 skylights controlled via Apple HomeKit.', image: '/images/gallery/skylight-motorized.png' },
  { id: '8', title: 'Kitchen Roller Shades', shadeType: 'Roller', roomType: 'Kitchen', location: 'Gilbert', description: 'Light-filtering roller shades in a moisture-resistant fabric for a modern kitchen.', image: '/images/gallery/kitchen-roller.png' },
  { id: '9', title: 'Media Room Blackout', shadeType: 'Motorized', roomType: 'Media Room', location: 'Scottsdale', description: 'Motorized blackout shades integrated with Lutron HomeWorks for a dedicated home theater.', image: '/images/gallery/media-room-blackout.webp' },
  { id: '10', title: 'Pool Area Exterior Shades', shadeType: 'Exterior', roomType: 'Patio', location: 'Mesa', description: 'Sealed-track exterior shades providing shade and wind protection at a resort-style pool.', image: '/images/gallery/pool-exterior.jpg' },
  { id: '11', title: 'Nursery Cellular Blackout', shadeType: 'Cellular', roomType: 'Bedroom', location: 'Gilbert', description: 'Cordless blackout cellular shades creating a safe, dark environment for a nursery.', image: '/images/gallery/nursery-cellular.png' },
  { id: '12', title: 'Flat Fold Romans Study', shadeType: 'Roman', roomType: 'Office', location: 'Phoenix', description: 'Flat fold Roman shades in a neutral linen adding warmth to a minimalist home office.', image: '/images/gallery/flat-fold-romans.webp' },
];

const shadeFilters = ['All', 'Motorized', 'Roller', 'Cellular', 'Solar', 'Roman', 'Exterior'];
const roomFilters = ['All', 'Living Room', 'Bedroom', 'Office', 'Kitchen', 'Patio', 'Dining Room', 'Media Room'];

export function GalleryGrid() {
  const [shadeFilter, setShadeFilter] = useState('All');
  const [roomFilter, setRoomFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filtered = galleryItems.filter((item) => {
    if (shadeFilter !== 'All' && item.shadeType !== shadeFilter) return false;
    if (roomFilter !== 'All' && item.roomType !== roomFilter) return false;
    return true;
  });

  return (
    <>
      {/* Filters */}
      <div className="space-y-4 mb-8">
        <div>
          <p className="text-sm font-medium text-navy mb-2">Filter by Shade Type</p>
          <div className="flex flex-wrap gap-2">
            {shadeFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setShadeFilter(filter)}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  shadeFilter === filter
                    ? 'bg-terracotta text-white'
                    : 'bg-white border border-sand/50 text-charcoal hover:border-terracotta/30'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-navy mb-2">Filter by Room</p>
          <div className="flex flex-wrap gap-2">
            {roomFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setRoomFilter(filter)}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  roomFilter === filter
                    ? 'bg-terracotta text-white'
                    : 'bg-white border border-sand/50 text-charcoal hover:border-terracotta/30'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group text-left bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-sand/30"
          >
            <div className="aspect-[4/3] relative overflow-hidden bg-sand-light">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white bg-navy/60 px-3 py-1.5 rounded-lg text-sm">View Details</span>
              </div>
            </div>
            <div className="p-4">
              <p className="font-semibold text-navy group-hover:text-terracotta transition-colors text-sm">{item.title}</p>
              <p className="text-xs text-charcoal-light mt-1">{item.shadeType} &middot; {item.location}</p>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-charcoal-light py-12">No projects match your filters. Try adjusting your selection.</p>
      )}

      {/* Lightbox Dialog */}
      {selectedItem && (
        <dialog
          open
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 w-full h-full m-0 p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedItem(null); }}
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-[16/10] relative overflow-hidden bg-sand-light">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-navy mb-1">{selectedItem.title}</h3>
              <p className="text-sm text-terracotta font-medium mb-3">{selectedItem.shadeType} &middot; {selectedItem.roomType} &middot; {selectedItem.location}</p>
              <p className="text-charcoal-light text-sm leading-relaxed">{selectedItem.description}</p>
              <button
                onClick={() => setSelectedItem(null)}
                className="mt-4 px-4 py-2 bg-sand-light rounded-lg text-sm text-charcoal hover:bg-sand transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
