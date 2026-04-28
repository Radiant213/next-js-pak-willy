"use client";

import { useState } from 'react';

export default function Home() {
  // 1. State untuk nyimpen data notes (pakai data dummy dari desain lu biar langsung keliatan cakep)
  const [notes, setNotes] = useState([
    { id: 1, title: 'Testimonials', desc: 'The only way to attract new clients, is to show your experience with the previous ones.', color: 'orange', pinColor: 'orange', rotate: '-rotate-2' },
    { id: 2, title: 'Trust Badges', desc: 'Show all the achievements you have. Awards, certificates, payment protections, etc.', color: 'blue', pinColor: 'blue', rotate: 'rotate-3' },
    { id: 3, title: 'Add Contacts', desc: 'People need to understand that if something will happen, they can always reach out to you.', color: 'purple', pinColor: 'purple', rotate: '-rotate-1' },
  ]);

  // 2. State untuk Modal dan Input Form
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');

  // Konfigurasi Tema (Warna & Pin)
  const theme = {
    bg: {
      orange: "bg-[#fff3eb]",
      blue: "bg-[#eef3fb]",
      purple: "bg-[#faeffb]",
    },
    text: {
      orange: "text-[#ed7b3c]",
      blue: "text-[#5873d6]",
      purple: "text-[#aa61cc]",
    },
    pin: {
      orange: "from-[#ff6f30] to-[#e04500] shadow-[#ff6f30]/40 border-[#ff6f30]/20",
      blue: "from-[#4b71ed] to-[#2542a1] shadow-[#4b71ed]/40 border-[#4b71ed]/20",
      purple: "from-[#a052ff] to-[#6a1ebd] shadow-[#a052ff]/40 border-[#a052ff]/20",
    }
  };

  // Fungsi untuk nyimpen catatan baru
  const handleSaveNote = () => {
    if (newTitle.trim() && newDesc.trim()) {
      // Randomizer buat warna dan kemiringan biar note baru tetep estetik
      const colors = ['orange', 'blue', 'purple'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-3', '-rotate-3'];
      const randomRotate = rotations[Math.floor(Math.random() * rotations.length)];

      const newNote = {
        id: Date.now(),
        title: newTitle,
        desc: newDesc,
        color: randomColor,
        pinColor: randomColor,
        rotate: randomRotate
      };

      setNotes([...notes, newNote]);
      
      
      setNewTitle('');
      setNewDesc('');
      setIsModalOpen(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fafafb] relative overflow-hidden font-sans pb-24 selection:bg-orange-200">
      
      {/* Background Notebook Lines */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: 'linear-gradient(transparent 95%, #000 95%)',
          backgroundSize: '100% 40px'
        }}
      ></div>

      {/* Header Section */}
      <div className="relative z-10 pt-20 md:pt-28 pb-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center justify-center gap-2 bg-[#ffede1] text-[#f4560b] px-4 py-1.5 rounded-full text-[0.8rem] font-bold mb-6 tracking-widest uppercase shadow-sm border border-[#ffdccc]">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          Note
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-[#3a3a3c] tracking-[-0.04em] leading-[1.05] drop-shadow-sm">
          Sticky Notes 
        </h1>
      </div>

      {/* Trigger Button (Menggantikan input bar di desain awal) */}
      <div className="relative z-20 max-w-2xl mx-auto px-4 mb-24 flex justify-center">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-[#ff6823] to-[#e44600] hover:from-[#f4550e] hover:to-[#d04000] text-white px-10 py-4 rounded-[1.5rem] font-bold shadow-lg shadow-[#ff6823]/30 transition-all active:scale-95 flex items-center gap-3"
        >
          <span className="text-xl">+</span> Tambah Catatan Baru
        </button>
      </div>

      {/* Sticky Notes Grid Setengah Zigzag */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-4">
        {/* Background Dashed Line untuk efek visual sambungan */}
        <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px border-l-2 border-dashed border-gray-200 -translate-x-1/2 -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-12 md:gap-y-8">
          {notes.map((note, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={note.id} 
                className={`flex justify-center w-full ${isEven ? 'md:justify-end' : 'md:justify-start md:mt-32'}`}
              >
                {/* Note Card */}
                <div className={`relative bg-white p-2.5 rounded-[1.5rem] shadow-2xl shadow-gray-200/50 border border-gray-50 flex-1 max-w-[340px] transition-transform hover:scale-[1.02] duration-300 z-10 ${note.rotate}`}>
                  
                  {/* Pin (Thumbtack) */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-[1.65rem] h-[1.65rem]">
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${theme.pin[note.pinColor]} drop-shadow-md border-[1.5px] relative flex items-center justify-center`}>
                      <div className="absolute top-[3px] left-[5px] w-[5px] h-[5px] bg-white/70 rounded-full blur-[0.5px]"></div>
                    </div>
                  </div>

                  {/* Inner Content Background */}
                  <div className={`p-6 sm:p-8 rounded-[1rem] ${theme.bg[note.color]} h-full flex flex-col justify-start`}>
                    <span className={`text-[1.3rem] font-medium italic block mb-3 opacity-90 ${theme.text[note.color]} font-serif leading-none`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <h3 className="font-bold text-gray-800 text-[1.25rem] tracking-tight mb-2.5">
                      {note.title}
                    </h3>
                    <p className="text-gray-600 text-[0.95rem] leading-relaxed font-normal whitespace-pre-wrap">
                      {note.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4 transition-opacity">
          <div className="bg-white p-8 rounded-[2rem] shadow-2xl max-w-md w-full mx-4 border border-gray-100">
            <h2 className="text-2xl font-extrabold mb-6 text-gray-800 text-center tracking-tight">Tambah Catatan</h2>
            
            <form onSubmit={(e) => { e.preventDefault(); handleSaveNote(); }}>
              <div className="mb-5">
                <label className="block text-gray-700 text-sm font-bold mb-2 ml-1" htmlFor="title">
                  Judul
                </label>
                <input
                  type="text"
                  id="title"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="bg-gray-50 border border-gray-200 rounded-[1rem] w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#ff6823] focus:border-transparent transition-all"
                  placeholder="Misal: Beli Kopi"
                  autoFocus
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2 ml-1" htmlFor="desc">
                  Isi Catatan
                </label>
                <textarea
                  id="desc"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="bg-gray-50 border border-gray-200 rounded-[1rem] w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#ff6823] focus:border-transparent transition-all h-32 resize-none"
                  placeholder="Tulis detail catatanmu di sini..."
                />
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-100 text-gray-600 font-bold py-3 px-6 rounded-[1rem] hover:bg-gray-200 transition-colors duration-300"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#ff6823] to-[#e44600] hover:from-[#f4550e] hover:to-[#d04000] text-white font-bold py-3 px-8 rounded-[1rem] shadow-lg shadow-[#ff6823]/30 transition-all active:scale-95"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer Profile */}
      <div className="flex flex-row items-center gap-4 mt-24 mb-10 justify-center relative z-10 w-full px-4">
        <p className="text-gray-500 font-medium text-[0.9rem] leading-snug text-center">
           <span className="text-[#f4560b] font-bold">Sticky Notes App</span> ©2026
        </p>
      </div>

    </main>
  );
}
