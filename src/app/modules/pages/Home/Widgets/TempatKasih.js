import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ObjTempatKasih from "../../../../const/ObjTempatKasih";

export function TempatKasih() {
  const tabsNav = [
    { id: 1, name: "Terbaru", key:"new" },
    { id: 2, name: "Terdekat", key:"near" },
    { id: 3, name: "Saran", key:"sugges" },
  ];

  const [activeTab, setActTab] = useState({
    active:1,
    data:ObjTempatKasih['new']
  });

  const setSelectedTab = (value,act) =>{
    setActTab({...activeTab, data:ObjTempatKasih[value], active:act});
  }

  const SlideItem = ({v,index}) =>{
    return (
        <div className="col-12 px-2" key={index}>
            <div className="feeds mb-3">
                <div className="fd-img mb-3">
                    <img src={require('../../../../../_metronic/_assets/media/feeds/'+v.img)} alt="tempat kasih" className="w-100 rounded h-150px" />
                </div>
                <div className="fd-info">
                    <p className="fw-bold mb-0">
                        <span className="name me-2">{v.name}</span> 
                        <span className="icon me-2">
                            <i className="bi bi-patch-check-fill text-success"></i>
                        </span>
                        <span className="icon">
                            <i className="bi bi-check-circle-fill text-info"></i>
                        </span>
                    </p>
                    <p className="text-info mb-0">
                        <span className="date">10 Oct 2022</span>
                        <span className="px-2">•</span>
                        <span className="text-muted">{index}x dibantu</span>
                    </p>
                    <p className="text-dark">
                        <span className="date">{v.location}</span>
                        <span className="px-2">•</span>
                        <span className="text-muted">{(index * 2) + 1} km</span>
                    </p>
                </div>
            </div>
        </div>
    );
  }
  
  return (
    <section id="tempat-kasih" className="border-top border-3">
        <ul className="nav justify-content-between">
        {tabsNav.map((v,index)=>(
            <li className={"nav-item col text-center border-bottom "+((v.id === activeTab.active) ? "border-info":"")} key={index} onClick={(e)=>setSelectedTab(v.key, (index+1))}>
                <span className={"py-3 nav-link fw-bold fs-5 "+((v.id === activeTab.active) ? "text-info":"text-muted")}>
                    {v.name}
                </span>
            </li>
        ))}
        </ul>
        <div className="px-8 tabulasi-info mt-5">
            <div className="d-flex justify-content-between">
                <p className="text-info">Tempat Kasih</p>
                <Link to="/tempat-kasih/feed">
                    <span className="text-info">Lihat semua</span>
                </Link>
            </div>
            <div className="list scroll-horizontal">
            <Carousel className="row" autoPlay="true" centerMode="true" infiniteLoop="true">
                {activeTab.data.map((v,index)=>(
                    <SlideItem v={v} index={index} />
                ))}
            </Carousel>
            </div>
        </div>
    </section>
    );
}

