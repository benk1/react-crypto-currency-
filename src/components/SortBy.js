import React from 'react'
import "font-awesome/css/font-awesome.css";


const SortBy =  (props) => {

  const {sortByRankAsc,sortByRankDesc,sortByNameAsc,sortByNameDesc,sortByPriceAsc,sortByPriceDesc} = props;
  return (
    <div>
      {
          <div className="sortBy">
            {" "}
             {/* <p>Sort By:</p>  */}
            <div className="Name">
              <i
              
                className="fa fa-long-arrow-up fa-2x"
                aria-hidden="true"
                onClick={sortByNameAsc}
              >
                Name
              </i>
              <i
                className="fa fa-long-arrow-down fa-2x"
                aria-hidden="true"
                onClick={sortByNameDesc}
              />
            </div>

            <div className="Price">
              <i
                className="fa fa-long-arrow-up fa-2x"
                aria-hidden="true"
                onClick={sortByPriceAsc }
              >
                Price
              </i>
              <i
                className="fa fa-long-arrow-down fa-2x"
                aria-hidden="true"
                onClick={sortByPriceDesc}
              />
            </div>

            <div className="Rank">
              <i
                className="fa fa-long-arrow-up fa-2x"
                aria-hidden="true"
                onClick={sortByRankAsc }
              >
                Rank
              </i>
              <i
                className="fa fa-long-arrow-down fa-2x"
                aria-hidden="true"
                onClick={sortByRankDesc}
              />
            </div>
            
          </div>
        }
      
    </div>
  )
}
export default SortBy;

