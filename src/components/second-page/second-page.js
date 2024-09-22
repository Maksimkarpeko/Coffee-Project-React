import { Component, useState } from 'react';
import Footer from '../footer/Footer';
import SectionAboutOurBeans from './About-our-beans/SectionAboutOurBeans';
import Search from './Search/search';
import Card from './card/Card';
import Filter from './filter/filter';
import HeaderSecond from './header-second/Header-second';

import './second-page.css';

class SecondPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			fromValue: '',
		};
	}
	CardArr = [
		{
			Name: 'AROMISTICO Coffee 1 kg',
			From: 'Brazil',
			Price: '6.99',
		},
		{
			Name: 'AROMISTICO Coffee 1 kg',
			From: 'Kenya',
			Price: '6.99',
		},
		{
			Name: 'AROMISTICO Coffee 1 kg',
			From: 'Columbia',
			Price: '6.99',
		},
	];
	CardArrNew = [
		{
			Name: 'AROMISTICO Coffee 1 kg',
			From: 'Brazil',
			Price: '6.99',
		},
		{
			Name: 'AROMISTICO Coffee 1 kg',
			From: 'Brazil',
			Price: '6.99',
		},
		{
			Name: 'AROMISTICO Coffee 1 kg',
			From: 'Brazil',
			Price: '6.99',
		},
	];

	setValue = newValue => {
		this.setState({ value: newValue });
	};

	setNewValue = value => {
		this.setState({
			fromValue: value === this.state.fromValue ? '' : value,
		});
	};

	render() {
		const filterCoffeeFrom = this.CardArr.filter(coffee => {
			return (
				(coffee.From.toLowerCase() === this.state.fromValue.toLowerCase() ||
					this.state.fromValue === '') &&
				coffee.From.toLowerCase().includes(this.state.value.toLowerCase())
			);
		});

		const filterCoffeeFromNew = this.CardArrNew.filter(coffee => {
			return (
				(coffee.From.toLowerCase() === this.state.fromValue.toLowerCase() ||
					this.state.fromValue === '') &&
				coffee.From.toLowerCase().includes(this.state.value.toLowerCase())
			);
		});

		return (
			<>
				<HeaderSecond />
				<SectionAboutOurBeans />
				<section>
					<div className='Function-panel'>
						<div className='fist-function-panel'>
							<Search value={this.state.value} onChange={this.setValue} />
						</div>
						<div className='second-function-panel'>
							<Filter
								fromValue={this.state.fromValue}
								onHandClick={this.setNewValue}
							/>
						</div>
					</div>
				</section>
				<section>
					<div style={{ display: 'flex' }} className='Card-New'>
						<div style={{ display: 'flex' }}>
							{filterCoffeeFrom.map((item, index) => (
								<div className={index === 0 ? 'First-card' : ''}>
									<Card
										key={index}
										Name={item.Name}
										From={item.From}
										Price={item.Price}
									/>
								</div>
							))}
						</div>
					</div>
					<div style={{ display: 'flex' }}>
						{filterCoffeeFromNew.map((item, index) => (
							<div className={index === 0 ? 'First-card' : ''}>
								<Card
									key={index}
									Name={item.Name}
									From={item.From}
									Price={item.Price}
								/>
							</div>
						))}
					</div>
				</section>

				<Footer />
			</>
		);
	}
}
export default SecondPage;
