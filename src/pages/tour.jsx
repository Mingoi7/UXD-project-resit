import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'

function tour() {
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
                <div className="tour">
                    <img src="images/search.png" width="300px" alt="" />
                    <ul>
                        瑞士【童話故事 飄零燕】 黃金列車 Golden Pass Line 阿萊奇冰川 Aletsch
                        Glacier 9/10天團
                        <br />
                        <li>行程特點</li>
                        <li>黃金列車 Golden Pass Line</li>
                        <li>暢遊享有和平之城稱譽的日內瓦~聯合國歐洲總部及紅十字會總部 </li>
                        <li>
                            {" "}
                            遊覽瑞士最著名的「環保城」采爾馬特，瑞士有九個環保鎮，全城沒有汽車,只有小量以電池推動的小車做運輸之用，
                            居民都喜愛徒步於大街小巷，間中更可見以馬車代步的居民，煞是有趣。
                        </li>
                        <li> 乘吊車登上瑞士著名馬特洪峰冰川天堂【小馬特洪峰】，大開眼界。</li>
                    </ul>
                    <p />
                    <p />
                    溫馨提示:
                    行程資料只供參考，確切行程內容、自選活動內容、酒店、餐膳等會因應季節、天氣、交通或其他因素而有所變動，以報名時取得的文字行程表為準
                    謝謝！
                </div>
                <div className="box">
                    日期:
                    <input
                        type="date"
                        id="start"
                        name="trip-start"
                        min="2024-01-01"
                        max="2025-12-31"
                    />
                    人數:{" "}
                    <p>
                        <input
                            type="number"
                            id="tentacles"
                            name="tentacles"
                            min={1}
                            max={100}
                        />
                        成人
                        <input
                            type="number"
                            id="tentacles"
                            name="tentacles"
                            min={1}
                            max={100}
                        />
                        小童
                    </p>團費
                    <p>
                        $17,988 起
                        <p></p>
                        <button type="button" className="btn btn-outline-primary btn-lg">
                            確定
                        </button>
                    </p>
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

export default tour;