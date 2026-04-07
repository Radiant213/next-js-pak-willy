import Image from "next/image";

export default function Home() {
  const notes = [
    { 
      id: 1, 
      title: 'Testimonials', 
      desc: 'The only way to attract new clients, is to show your experience with the previous ones. Include: real photo, position at company, links their profiles.', 
      color: 'orange', 
      pinColor: 'orange', 
      rotate: '-rotate-2' 
    },
    { 
      id: 2, 
      title: 'Trust Badges', 
      desc: 'Show all the achievements you have. Awards, certificates, payment protections, etc.', 
      color: 'blue', 
      pinColor: 'blue', 
      rotate: 'rotate-3' 
    },
    { 
      id: 3, 
      title: 'Add Contacts', 
      desc: 'People need to understand that if something will happen, they can always reach out to you. Leave links to your social media, your email and the phone.', 
      color: 'purple', 
      pinColor: 'purple', 
      rotate: '-rotate-1' 
    },
    { 
      id: 4, 
      title: 'Case Studies', 
      desc: 'Share detailed examples of how your product or service solved real problems. This helps visitors imagine their own success.', 
      color: 'orange', 
      pinColor: 'orange', 
      rotate: 'rotate-2' 
    },
    { 
      id: 5, 
      title: 'Clear Refund Policy', 
      desc: 'Offer a transparent money-back guarantee or easy return process to remove buying friction.', 
      color: 'blue', 
      pinColor: 'blue', 
      rotate: '-rotate-2' 
    },
  ];

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

      {/* Form Section */}
      <div className="relative z-20 max-w-2xl mx-auto px-4 mb-24">
        <form className="bg-white/90 backdrop-blur-md p-2.5 rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col sm:flex-row gap-2 transition-all hover:shadow-2xl hover:shadow-gray-200/80 group">
          <input
            className="flex-1 bg-transparent px-6 py-3 sm:py-4 outline-none text-gray-700 placeholder-gray-400 font-medium text-[1.05rem] min-w-0"
            placeholder="Tuliskan notes tambahanmu disini..."
          />
          <button className="bg-gradient-to-r from-[#ff6823] to-[#e44600] group-hover:from-[#f4550e] group-hover:to-[#d04000] text-white px-10 py-3 sm:py-4 rounded-[1.5rem] font-bold shadow-lg shadow-[#ff6823]/30 transition-all active:scale-95 whitespace-nowrap border-b-2 border-transparent">
            Tambah
          </button>
        </form>
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
                  <div className={`p-6 sm:p-8 rounded-[1rem] ${theme.bg[note.color]} h-full flex flex-col justify-center`}>
                    <span className={`text-[1.3rem] font-medium italic block mb-3 opacity-90 ${theme.text[note.color]} font-serif leading-none`}>
                      {note.id.toString().padStart(2, '0')}
                    </span>
                    <h3 className="font-bold text-gray-800 text-[1.25rem] tracking-tight mb-2.5">
                      {note.title}
                    </h3>
                    <p className="text-gray-600 text-[0.95rem] leading-relaxed font-normal">
                      {note.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Profile */}
      <div className="flex flex-row items-center gap-4 mt-24 mb-10 justify-center relative z-10 w-full px-4">
        <p className="text-gray-500 font-medium text-[0.9rem] leading-snug text-left">
           <span className="text-[#f4560b] font-bold">Copyright</span> ©2026
        </p>
      </div>

    </main>
  );
}
