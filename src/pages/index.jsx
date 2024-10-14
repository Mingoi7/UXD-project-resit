import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import Carousel from 'react-bootstrap/Carousel';

function index() {
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
                <Carousel>
                    <Carousel.Item>
                        <Link to="tour">
                            <img src="images/center.png" className="d-block" alt="..." width="600px" />
                            <Carousel.Caption>
                                <h3>絲綢之路8天精選遊</h3>
                                <p>LSAA08E</p>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to="tour">
                            <img src="images/center2.png" className="d-block" alt="..." width="600px" />
                            <Carousel.Caption>
                                <h3>北歐四國Northern Europe、 波羅的海三國Baltic 12天團</h3>
                                <p>ENCAWEW</p>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to="tour">
                            <img src="images/center3.png" className="d-block" alt="..." width="600px" />
                            <Carousel.Caption>
                                <h3>俄羅斯10天極光之旅(莫斯科、摩爾曼斯克、聖彼得堡)</h3>
                                <p>
                                    ENCA12D
                                </p>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                </Carousel>
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

export default index;