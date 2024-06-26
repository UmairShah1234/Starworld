import React from "react";
import ProjectCard from "./ProjectCard";

const ProductComponent = () => {
  const products = [
    {
      name: "Front Loading Garment Processing Washing Machine",
      description: "With Forward Tilting 200 ,280 ,380 ,480 kgs capacity machines. O-zonator Machine.",
      price: 19.99,
      image: "/assets/FLGPWM.jpg",
    },
    {
      name: "Front Loading Garment Processing Machine With Forward Tilting Arrangement",
      description:
        "With Forward Tilting 200 ,280 ,380 ,480 kgs capacity machines. O-zonator Machine.",
      price: 29.99,
      image: "/assets/FLGPMWFTA.jpg",
    },
    {
      name: "Low Speed Dyeing Machine",
      description:
        "Available 90 ,480 Kg capacity. An efficient Garment/Knittwear Processor and Washer. A boon to garment/knittwear manufacturers exporters and process house. Choice of Gear/Timing Belt Pulley drives. Choice of Manual-Pneumatic/Microprocessor PLC Controller Touch screen panel. Carries out desizing,Enzyme,Silicon wash,Bleaccing Stoning Softening Dyeing an many more..",
      price: 29.99,
      image: "/assets/FAFLGWDM.jpg",
    },
    {
      name: "Side Loading Garment / Textile Processing Washing Machine",
      description:
        "Available in 5kg to 75kg capacity .An effecient Garment Processor and Washer .A boon to Garment Manufactuers ,Exporters and Process houses .Carries out Desizing ,Enzyme ,Bleaching ,Stoning ,Softening Dyeing and many more...",
      price: 29.99,
      image: "/assets/SLGTPWM.jpg",
    },
    {
      name: "Side Loading Garment / Textile Processing Washing Machine (Double Door)",
      description:
        "Availble in 5kg to 75kg capacity .An efficient Garment Processor and Washer .A boon to Garment Manufcaturers,Exporters and Process houses .\nCarries out Desizing, Enzyme, Bleaching, Stoning, Softening Dyeing and many more...",
      price: 29.99,
      image: "/assets/SLGTPWMDD.jpg",
    },
    {
      name: "Drying Tumbler With Forward Tilting Arrangement",
      description:
        "Available in 10kg to 125kg capacities .Heating availabe in steam .Thermic Flood, Electric and Gas .Unique air flow ensured Maximum Heat Utilisation,Quick and Efficient dyeing .Choice of fully Automatic,Microprocesor Controller along with Cool down features.",
      price: 29.99,
      image: "/assets/DTWFTA.jpg",
    },
    {
      name: "Hydro Extractor ( Centrifuge )",
      description:
        "Available in 25kg ,50kg ,75kg ,100kg capacity.Heavy dusty 3 points suspension type high speed Centrifuge.Stainless steel Inner and Outer drum.Inverter driver for soft start stop and Breaking Register.Centrifugal cluth and gradual acceleration.Large drain out auto time future",
      price: 29.99,
      image: "/assets/HEC.jpg",
    },
    {
      name: "Drying Tumbler",
      description:
        "Available in 10kg to 125kg capacities .Heating availabe in steam .Thermic Flood, Electric and Gas .Unique air flow ensured Maximum Heat Utilisation,Quick and Efficient dyeing .Choice of fully Automatic,Microprocesor Controller along with Cool down features.",
      price: 29.99,
      image: "/assets/DT.jpg",
    },
    {
      name: "Drying Tumbler ( High Capacity )",
      description:
        "Available in 10kg to 125kg capacities .Heating availabe in steam .Thermic Flood, Electric and Gas .Unique air flow ensured Maximum Heat Utilisation,Quick and Efficient dyeing .Choice of fully Automatic,Microprocesor Controller along with Cool down features.",
      price: 29.99,
      image: "/assets/SLGTPWMDD.jpg",
    },
  ];
  return (
    <div id="productSection">
      <div className="container my-3">
        <h2 className="text-center mb-5 text-decoration-underline">
          Our Products
        </h2>
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-md-4">
              <ProjectCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
