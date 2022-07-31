export default function NoData() {
    //@ts-ignore
    
return (
    <div>

    <div className="text-2xl text-gray-900 font-bold" style={{display: "flex",justifyContent: "center",
    flexWrap: "wrap",marginBottom: "25px"}}>
        <div>
            <img src="/assets/images/error.svg" alt="error" width="100px" height="100px">
            </img>
        {/* {new Image({src:"/../public/assets/images/error.svg",width: "100px",height:"100px"})} */}
        </div>
        </div>
        <div className="text-2xl text-gray-900 font-bold" style={{display: "flex",justifyContent: "center",
        flexWrap: "wrap",}}>
        <div>
        {"No Data Found"}
        </div>
      </div>
    </div>
)
}

export {NoData}