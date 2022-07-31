export default function ErrorBadge() {
return (
    <div style={{borderRadius: "10px",display: "flex",justifyContent: "space-evenly",flexWrap: "wrap",}} className="bg-red-400 lg:rounded-full text-center py-4 lg:px-4">
  <div style={{borderRadius: "10px",display: "flex",justifyContent: "space-evenly",flexWrap: "wrap",}} className="p-2 bg-red-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
    <span className="flex rounded-full bg-yellow-300 uppercase text-black px-2 py-1 text-xs font-bold mr-3">Error</span>
    <span className="font-semibold mr-2 text-center flex-column">Looks like you&apos;re not connected to the Ropsten test network</span>
  </div>
</div>
)
}

export {ErrorBadge}