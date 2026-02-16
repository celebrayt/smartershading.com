'use client';

import { useState } from 'react';

interface GalleryItem {
  id: string;
  title: string;
  shadeType: string;
  roomType: string;
  location: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  { id: '1', title: 'Modern Great Room Motorized Shades', shadeType: 'Motorized', roomType: 'Living Room', location: 'Scottsdale', description: 'Floor-to-ceiling motorized solar shades with Lutron integration in a contemporary desert home.' },
  { id: '2', title: 'Blackout Roller Master Suite', shadeType: 'Roller', roomType: 'Bedroom', location: 'Paradise Valley', description: 'Blackout roller shades with cassette valance in a luxury master bedroom.' },
  { id: '3', title: 'Cellular Shades Family Room', shadeType: 'Cellular', roomType: 'Living Room', location: 'Phoenix', description: 'Double-cell honeycomb shades reducing cooling costs in a west-facing family room.' },
  { id: '4', title: 'Solar Shades Home Office', shadeType: 'Solar', roomType: 'Office', location: 'Tempe', description: '5% openness solar shades eliminating glare while maintaining mountain views.' },
  { id: '5', title: 'Roman Shades Dining Room', shadeType: 'Roman', roomType: 'Dining Room', location: 'Scottsdale', description: 'Hobbled fold Roman shades in designer linen fabric for an elegant dining space.' },
  { id: '6', title: 'Exterior Patio Drop Shades', shadeType: 'Exterior', roomType: 'Patio', location: 'Chandler', description: 'Motorized cable-guided exterior shades transforming a covered patio into a bug-free retreat.' },
  { id: '7', title: 'Skylight Motorized Shades', shadeType: 'Motorized', roomType: 'Living Room', location: 'Paradise Valley', description: 'Custom motorized shades for 12 skylights controlled via Apple HomeKit.' },
  { id: '8', title: 'Kitchen Roller Shades', shadeType: 'Roller', roomType: 'Kitchen', location: 'Gilbert', description: 'Light-filtering roller shades in a moisture-resistant fabric for a modern kitchen.' },
  { id: '9', title: 'Media Room Blackout', shadeType: 'Motorized', roomType: 'Media Room', location: 'Scottsdale', description: 'Motorized blackout shades integrated with Lutron HomeWorks for a dedicated home theater.' },
  { id: '10', title: 'Pool Area Exterior Shades', shadeType: 'Exterior', roomType: 'Patio', location: 'Mesa', description: 'Sealed-track exterior shades providing shade and wind protection at a resort-style pool.' },
  { id: '11', title: 'Nursery Cellular Blackout', shadeType: 'Cellular', roomType: 'Bedroom', location: 'Gilbert', description: 'Cordless blackout cellular shades creating a safe, dark environment for a nursery.' },
  { id: '12', title: 'Flat Fold Romans Study', shadeType: 'Roman', roomType: 'Office', location: 'Phoenix', description: 'Flat fold Roman shades in a neutral linen adding warmth to a minimalist home office.' },
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
            <div className="aspect-[4/3] bg-gradient-to-br from-sand-light to-warm-gray relative">
              <div className="absolute inset-0 flex items-center justify-center text-sand-dark/40">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
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
            <div className="aspect-[16/10] bg-gradient-to-br from-sand-light to-warm-gray flex items-center justify-center">
              <svg className="w-20 h-20 text-sand-dark/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
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
