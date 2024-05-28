import Item from "./Item";

const DashBoard = () => {

  const content = [{
    rank: 1,
    name: "Selling with re entr",
    calmarratio:"3.96",
    ovprofit:	381845,
    dyprofit:		319.54,
    win:	0.65,
    price:"-",
    action:	"VIEW",
  },
  {
    rank: 2,
    name: "Selling with re entr",
    calmarratio:"3.96",
    ovprofit:	381845,
    dyprofit:		319.54,
    win:	0.65,
    price:"-",
    action:	"VIEW",
  },
  {
    rank: 3,
    name: "Selling with re entr",
    calmarratio:"3.96",
    ovprofit:	381845,
    dyprofit:		319.54,
    win:	0.65,
    price:500,
    action:	"VIEW",
  },
  {
    rank: 4,
    name: "Selling with re entr",
    calmarratio:"3.96",
    ovprofit:	381845,
    dyprofit:		319.54,
    win:	0.65,
    price:"-",
    action:	"VIEW",
  },
  {
    rank: 5,
    name: "Selling with re entr",
    calmarratio:"3.96",
    ovprofit:	381845,
    dyprofit:		319.54,
    win:	0.65,
    price:"-",
    action:	"VIEW",
  }
  ,{
    rank: 6,
    name: "Selling with re entr",
    calmarratio:"3.96",
    ovprofit:	381845,
    dyprofit:		319.54,
    win:	0.65,
    price:"-",
    action:	"VIEW",
  },{
    rank: 7,
    name: "Selling with re entr",
    calmarratio:"3.96",
    ovprofit:	381845,
    dyprofit:		319.54,
    win:	0.65,
    price:"-",
    action:	"VIEW",
  },{
    rank: 8,
    name: "Selling with re entr",
    calmarratio:"3.96",
    ovprofit:	381845,
    dyprofit:		319.54,
    win:	0.65,
    price:"-",
    action:	"VIEW",
  }
  ,
  {
    rank: 9,
    name: "Selling with re entr",
    calmarratio:"3.96",
    ovprofit:	381845,
    dyprofit:		319.54,
    win:	0.65,
    price:500,
    action:	"VIEW",
  },
  {
    rank: 10,
    name: "Selling with re entr",
    calmarratio:"3.96",
    ovprofit:	381845,
    dyprofit:		319.54,
    win:	0.65,
    price:"-",
    action:	"VIEW",
  },
  {
    rank: 11,
    name: "Selling with re entr",
    calmarratio:"3.96",
    ovprofit:	381845,
    dyprofit:		319.54,
    win:	0.65,
    price:"-",
    action:	"VIEW",
  }
  ,{
    rank: 12,
    name: "Selling with re entr",
    calmarratio:"3.96",
    ovprofit:	381845,
    dyprofit:		319.54,
    win:	0.65,
    price:"-",
    action:	"BUY",
  },{
    rank: 13,
    name: "Selling with re entr",
    calmarratio:"3.96",
    ovprofit:	381845,
    dyprofit:		319.54,
    win:	0.65,
    price:"-",
    action:	"BUY",
  },{
    rank: 14,
    name: "Selling with re entr",
    calmarratio:"3.96",
    ovprofit:	381845,
    dyprofit:		319.54,
    win:	0.65,
    price:"-",
    action:	"BUY",
  }
  ]



  return(
    <div className="dashboard-container">
      <h1 className="dashboard-header">LeaderBoards</h1>

      <div className="content-container">
        <div className="basic" id="left">Basic Backtest</div>
        <div className="basic slippage" id="right">
          <span>Slippage</span>
          <select name="percentage" id="percentage" className="">
            <option value="0" selected>0%</option>
            <option value="0.5">0.5%</option>
            <option value="1">1%</option>
          </select>
        </div>

        <Item rank="Rank" name="Name" calmarratio="Calmar Ration" ovprofit="Overall Profit" dyprofit="Avg. Daily Profit" win="Win %(Day)" price="Price(Rs)" action="Action" className=" title"/>
        <div className="content-list">
        <div className="content-list">
            {content.map((data,index) => 
              <Item 
            key={index} 
            rank={data.rank} 
            name={data.name} 
            calmarratio={data.calmarratio} 
            ovprofit={data.ovprofit} 
            dyprofit={data.dyprofit} 
            win={data.win} 
            price={data.price} 
            action={data.action} 
            className={index % 2 === 0 ? " even" : " odd"} // Apply different class based on index
        />
        )}
        </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard;