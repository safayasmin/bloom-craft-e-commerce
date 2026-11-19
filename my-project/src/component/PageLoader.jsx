export default function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#0d0d0d] text-white">
      <div className="w-12 h-12 rounded-full border-2 border-[#d4af37]/20 border-t-[#d4af37] animate-spin mb-4" />
      <p className="text-xs uppercase tracking-[3px] text-[#c9a66b]">Loading BloomCraft...</p>
    </div>
  );
}
