const Item = ({rank,name,calmarratio,ovprofit,dyprofit,win,price,action,className}) => {
  return(
    <div className={`item-container`+className}>
        <li>
          {rank}
        </li>
        <li>
          {name}
        </li>
        <li>
            {calmarratio}
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-5 h-5 mr-1" style={{width: 20}}><path  stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path></svg>
        </li>
        <li>
          {ovprofit}
        </li>
        <li>
          {dyprofit}
        </li>
        <li>
          {win}
        </li>
        <li>
          {price}
        </li>
        <li className="view">
          <a href="#">{action}</a>
        </li>
    </div>
  )
}

export default Item;