import React from 'react';
import './Homepage.css';
import Product from '../Product/Product';
import uuid from 'react-uuid';

const Homepage = () => {
	return (
		<div className="homepage">
			<img
				className="homepage__image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt="amazon-banner"
			/>
			<div className="homepage__row">
				<Product
					id={uuid()}
					title="Samsung Galaxy A51 (Blue, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
					price={249.99}
					rating={3}
					image="https://images-na.ssl-images-amazon.com/images/I/81qVoEhymIL._SY679_.jpg"
				/>
				<Product
					id={uuid()}
					title="New Apple iPhone SE (64GB, Black) [Carrier Locked] + Carrier Subscription [Cricket Wireless] ($10/Month Amazon Gift Card Credit)"
					price={399}
					rating={5}
					image="https://m.media-amazon.com/images/I/81hCytKTUTL.jpg"
				/>
			</div>
			<div className="homepage__row">
				<Product
					id={uuid()}
					title="Corsair K70 RGB MK.2 Mechanical Gaming Keyboard - USB Passthrough & Media Controls - Linear & Quiet - Cherry MX Red - RGB LED Backlit, CH-9109010-NA"
					price={139}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/71eARwGvFaL._AC_SX679_.jpg"
				/>
				<Product
					id={uuid()}
					title="Redragon M901 Wired Gaming Mouse, MMO RGB LED Backlit Computer Mice, 12400 DPI Perdition with 18 Programmable Buttons, Weight Tuning Set for Windows PC Gaming (Black)"
					price={11.96}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/61axiFzoV6L._AC_SX522_.jpg"
				/>
				<Product
					id={uuid()}
					title="VicTsing [30% Larger Extended Gaming Mouse Pad with Stitched Edges, Long XXL Mousepad (31.5x15.7In), Desk Pad Keyboard Mat, Non-Slip Base, Water-Resistant, for Work & Gaming, Office & Home, Black"
					price={14}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/71ilgS56mVL._AC_SX679_.jpg"
				/>
			</div>
			<div className="homepage__row">
				<Product
					id={uuid()}
					title="Samsung QN82Q80RAFXZA Flat 82-Inch QLED 4K Q80 Series Ultra HD Smart TV with HDR and Alexa Compatibility (2019 Model"
					price={4000}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/91fX74ZTAOL._AC_SL1500_.jpg"
				/>
			</div>
		</div>
	);
};

export default Homepage;
