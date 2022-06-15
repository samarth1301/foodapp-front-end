import React from 'react'
import { Link, useParams } from 'react-router-dom';

const ProfileTab = () => {
  const { tabId } = useParams();

  return (
   <>
         <div className="flex flex-col md:flex-row items-start">
              <ul
                className="nav nav-tabs mx-auto flex items-end  md:mx-0  md:flex-col md:flex-wrap list-none border-b-0 pl-0 md:mr-4"
                id="tabs-tabVertical"
                role="tablist"
              >
                <li className="nav-item flex-grow" role="presentation">
                  <Link
                    to={"/me/orders"}
                    className={` ${
                      tabId == "orders" &&
                      "bg-megenta-100 hover:bg-megenta-200 md:border-l-4 border-b-4 md:border-b-0 border-megenta-400 shadow-lg"
                    } nav-link block font-medium text-md leading-tight uppercase border-x-0 border-t-0 border-b-2  px-6 py-3 my-2  hover:bg-gray-200 `}
                    id="tabs-messages-tabVertical"
                    data-bs-toggle="pill"
                    data-bs-target="#tabs-messagesVertical"
                    role="tab"
                    aria-controls="tabs-messagesVertical"
                    aria-selected="false"
                  >
                    My Orders
                  </Link>
                </li>
                <li className="nav-item flex-grow" role="presentation">
                  <Link
                    to={"/me/reviews"}
                    className={` ${
                      tabId == "reviews" &&
                      "bg-megenta-100 hover:bg-megenta-200 md:border-l-4 border-b-4 md:border-b-0 border-megenta-400 shadow-lg"
                    } nav-link block font-medium leading-tight uppercase border-x-0 border-t-0 border-b-2  px-6 py-3 my-2  hover:bg-gray-200 active`}
                    id="tabs-home-tabVertical"
                    data-bs-toggle="pill"
                    data-bs-target="#tabs-homeVertical"
                    role="tab"
                    aria-controls="tabs-homeVertical"
                    aria-selected="true"
                  >
                    Reviews
                  </Link>{" "}
                </li>
              
              </ul>
              <div
                className="tab-content p-4  w-full h-56 overflow-y-auto"
                id="tabs-tabContentVertical"
              >
                {tabId == "reviews" && (
                  <div
                    className="tab-pane fade show active"
                    id="tabs-homeVertical"
                    role="tabpanel"
                    aria-labelledby="tabs-home-tabVertical"
                  >
                    My Reviews
                  </div>
                )}
             
                {tabId == "orders" && (
                  <div
                    className="tab-pane fade show active"
                    id="tabs-homeVertical"
                    role="tabpanel"
                    aria-labelledby="tabs-home-tabVertical"
                  >
                    My Orders
                  </div>
                )}
              </div>
            </div>
   </>
  )
}

export default ProfileTab