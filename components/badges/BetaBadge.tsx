export default function BetaBadge() {
return (
    <div style={{borderRadius: "10px",display: "flex",justifyContent: "space-evenly",flexWrap: "wrap",}} className="bg-orange-400 lg:rounded-full text-center py-2 lg:px-4">
  <div style={{background:"#4cbaff",borderRadius: "10px",display: "flex",justifyContent: "space-evenly",flexWrap: "wrap",}} className="p-2 items-center text-white leading-none lg:rounded-full flex lg:inline-flex" role="alert">
    <span className="flex rounded-full bg-orange-400 uppercase text-black px-2 py-1 text-xs font-bold mr-3">Note</span>
    <span className="font-semibold mr-2 text-center text-black flex-column">This app is still in beta</span>
  </div>
</div>
)
}

export {BetaBadge}