import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'

function search() {
    return (
        <div className="container">
            <div className="logo">
                <Link to="/" > <img src="images/logo.png" width="200px" alt="" /></Link>
            </div>
            <div className="header">
                <nav role="navigation" className="primary-navigation">
                    <ul>
                        <li>
                            <a href="/">
                                <i className="fa-solid fa-house" />
                                <span classname="home-11">主頁</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa-regular fa-flag" />
                                <span classname="travel-group">旅行團</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa-solid fa-plane-up" />
                                <span classname="flight-hotel">機票/酒店</span>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa-solid fa-ship" />
                                <span classname="cruise">郵輪</span>{" "}
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span classname="cruise">
                                    <i className="fa-brands fa-whatsapp" />
                                    WhatsApp 查詢/報名9685 1691{" "}
                                </span>{" "}
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <span classname="cruise">
                                    <i className="fa-brands fa-whatsapp" />
                                    WhatsApp 包團9137 5396
                                </span>{" "}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="nav">
                <button type="button" className="btn btn-outline-primary btn-lg">
                    <i className="fa-solid fa-ship" />
                    熱賣精選
                </button>
                <button type="button" className="btn btn-outline-primary btn-lg">
                    <i className="fa-solid fa-location-dot" /> 本地旅遊{" "}
                </button>
                <button type="button" className="btn btn-outline-primary btn-lg">
                    <i className="fa-solid fa-globe" />
                    旅遊須知{" "}
                </button>
                <button type="button" className="btn btn-outline-primary btn-lg">
                    <i className="fa-solid fa-cloud" />
                    天氣預測
                </button>
                <button type="button" className="btn btn-outline-primary btn-lg">
                    <i className="fa-solid fa-book" /> 公司消息{" "}
                </button>
                <button type="button" className="btn btn-outline-primary btn-lg">
                    <i className="fa-solid fa-camera" />
                    出遊隨拍
                </button>
                <button type="button" className="btn btn-outline-primary btn-lg">
                    <i className="fa-solid fa-bullhorn" />
                    旅遊講座
                </button>
                <button type="button" className="btn btn-outline-primary btn-lg">
                    <i className="fa-solid fa-sitemap" />
                    分行資料
                </button>
            </div>
            <div className="content">
                <div className="listbox-area">
                    <div>
                        <span id="ss_elem" className="listbox-label">
                            搜索結果: 西歐
                        </span>
                        <ul
                            id="ss_elem_list"
                            tabIndex={0}
                            role="listbox"
                            aria-labelledby="ss_elem"
                        >
                            <Link to="/tour">
                                <li id="ss_elem_Np">
                                    <span className="checkmark" aria-hidden="true" />
                                    <img src="images/search.png" width="200px" alt="" />
                                    意大利Italy~色彩五漁村Cinque Terre 深度遊9/10天團
                                    <br />
                                    EWFF10D (下載行程) 出發日期： 2024-10-31 2024-11-07
                                    <br />
                                    天數：10天 同行優惠 HK$17,988+/位
                                </li>
                            </Link>
                            <Link to="/tour">
                                <li id="ss_elem_Pu">
                                    <span className="checkmark" aria-hidden="true" />
                                    <img src="images/search2.png" width="200px" alt="" />
                                    楓葉白川鄉‧惠那峽‧飛驒高山‧琵琶湖‧奈良‧春日大社‧兩晚下呂温泉六天團
                                    <br />
                                    EWFF10D (下載行程) 出發日期： 2024-10-31 2024-11-01 2024-11-07
                                    <br />
                                    天數：5天 同行優惠 HK$12,988+/位
                                </li>
                            </Link>
                            <Link to="/tour">
                                <li id="ss_elem_Am">
                                    <span className="checkmark" aria-hidden="true" />
                                    <img src="images/search3.png" width="200px" alt="" />
                                    千島湖 、 杭州、無鍚、上海5天團
                                    <br />
                                    LWHH05S (下載行程) 出發日期： 2024-10-31 2024-11-01
                                    <br />
                                    天數：7天 同行優惠 HK$8,988+/位
                                </li>
                            </Link>
                            <Link to="/tour">
                                <li id="ss_elem_Am">
                                    <span className="checkmark" aria-hidden="true" />
                                    <img src="images/search4.png" width="200px" alt="" />
                                    東京,富士山, 河口湖,箱根, 鐮倉古都, 川越小江戶,
                                    兩晚河口湖温泉賞紅葉六天團
                                    <br />
                                    LWAA061 (下載行程) 出發日期： 2024-10-31
                                    <br />
                                    天數：3天 同行優惠 HK$4788+/位
                                </li>
                            </Link>
                            <Link to="/tour">
                                <li id="ss_elem_Am">
                                    <span className="checkmark" aria-hidden="true" />
                                    <img src="images/search5.png" width="200px" alt="" />
                                    南京-佛教名山～牛首山 ．無鍚． 杭州．塘棲古鎮．上海6天團
                                    <br />
                                    LWAA06S (下載行程) 出發日期： 2024-11-07
                                    <br />
                                    天數：8天 同行優惠 HK$7,988+/位
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="search">
                <nav role="navigation" className="primary-navigation">
                    <ul>
                        <li>
                            <a href="/">目的地 ▾</a>
                            <ul className="dropdown">
                                <li>
                                    <Link to="/search" > 歐洲 </Link>
                                </li>
                                <li>
                                    <Link to="/search" >東南亞</Link>
                                </li>
                                <li>
                                    <Link to="/search" > 非洲</Link>
                                </li>
                                <li>
                                    <Link to="/search" > 中亞</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/">日期 ▾</a>
                            <ul className="dropdown">
                                <li>
                                    <a href="/">
                                        <input type="datetime-local" />{" "}
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/">預算 ▾</a>
                            <ul className="dropdown">
                                <li>
                                    <a href="/"> 0-3000 $HKD </a>
                                </li>
                                <li>
                                    <a href="/"> 3000-5000 $HKD</a>
                                </li>
                                <li>
                                    <a href="/"> 5000-7000 $HKD</a>
                                </li>
                                <li>
                                    <a href="/"> &gt;7000 $HKD </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/">類型 ▾</a>
                            <ul className="dropdown">
                                <li>
                                    <a href="/"> 旅行團</a>
                                </li>
                                <li>
                                    <a href="/"> 自由行</a>
                                </li>
                                <li>
                                    <a href="/"> 渡輪</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <i className="fa-solid fa-magnifying-glass" />
                            <span classname="search-text">搜尋</span>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="ads">
                <svg border="1px" solid="red" height={300} width={300}>
                    <rect
                        x={40}
                        y={40}
                        height={150}
                        width={150}
                        fill="gray"
                        rx={20}
                        ry={20}
                    />
                    <text x={50} y={70}>
                        <a href="//">廣告1</a>
                    </text>
                </svg>
                <svg border="1px" solid="red" height={300} width={300}>
                    <rect
                        x={40}
                        y={40}
                        height={150}
                        width={150}
                        fill="gray"
                        rx={20}
                        ry={20}
                    />
                    <text x={50} y={70}>
                        <a href="//">廣告2</a>
                    </text>
                </svg>
            </div>
            <div className="footer">
                <span classname="disclaimer">私隱政策</span>
                <span classname="disclaimer">免責條款</span>
                <span classname="email-7">電郵：</span>
                <span classname="cs-email">cs@morningstartravel.com.hk</span>
                <span classname="copyright">
                    Copyright© 2023 BAO SHINN INTERNATIONAL EXPRESS LIMITED. All Rights
                    Reserved. 牌照號碼: 352614
                </span>
            </div>
        </div>

    )
}

export default search;