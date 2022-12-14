import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems, newArray, updateDistance } from './utils';
import { data } from './data';
import SpotCard from './spotCard';
import DistanceBlock from './distanceBlock';

const columnNames = ['1日目', '追加候補'];

const cardColors = [
	'azure',
	'beige',
	'bisque',
	'blanchedalmond',
	'burlywood',
	'cornsilk',
	'gainsboro',
	'ghostwhite',
	'ivory',
];
const pickColor = () => {
	let rand = Math.floor(Math.random() * 10);
	return cardColors[rand];
};

class Cards extends Component {
	constructor() {
		super();
		this.onColumnDrop = this.onColumnDrop.bind(this);
		this.onCardDrop = this.onCardDrop.bind(this);
		this.getCardPayload = this.getCardPayload.bind(this);
		this.state = {
			scene: {
				type: 'container',
				props: {
					orientation: 'horizontal',
				},
				children: generateItems(0, columnNames.length, (i) => ({
					id: `column${i}`,
					type: 'container',
					name: columnNames[i],
					props: {
						orientation: 'horizontal',
						className: 'card-container',
						style: {
							backgroundColor: 'khaki',
							margin: '5px 10px',
							padding: '5px 20px',
							borderRadius: '5px',
						},
					},
					children: generateItems(
						Math.floor(data.length / columnNames.length) * i,
						Math.floor(data.length / columnNames.length) * (i + 1),
						(j) => ({
							type: 'draggable',
							id: `${i}${j}`,
							props: {
								className: 'card',
								style: { backgroundColor: pickColor(), color: 'black' },
							},
							data: data[j],
						})
					),
				})),
			},
			distance: newArray(data.length - 1, '距離 1km'),
		};
		console.log(this.state);
	}

	render() {
		return (
			<div className="card-scene">
				<Container
					orientation="vertical"
					onDrop={this.onColumnDrop}
					dragHandleSelector=".column-drag-handle"
					dropPlaceholder={{
						animationDuration: 150,
						showOnTop: true,
						className: 'cards-drop-preview',
					}}
				>
					{this.state.scene.children.map((column) => {
						return (
							<Draggable key={column.id}>
								<div className={column.props.className}>
									<div className="card-column-header">{column.name}</div>
									<Container
										{...column.props}
										groupName="col"
										onDragStart={(e) => console.log('drag started', e)}
										onDragEnd={(e) => console.log('drag end', e)}
										onDrop={(e) => this.onCardDrop(column.id, e)}
										getChildPayload={(index) =>
											this.getCardPayload(column.id, index)
										}
										dragClass="card-ghost"
										dropClass="card-ghost-drop"
										onDragEnter={() => {
											console.log('drag enter:', column.id);
										}}
										onDragLeave={() => {
											console.log('drag leave:', column.id);
										}}
										onDropReady={(p) => console.log('Drop ready: ', p)}
										dropPlaceholder={{
											animationDuration: 150,
											showOnTop: true,
											className: 'drop-preview',
										}}
										dropPlaceholderAnimationDuration={200}
									>
										{column.children.map((card, i) => {
											return (
												<>
													<Draggable key={card.id}>
														<SpotCard {...card} />
													</Draggable>
                          <DistanceBlock distance={this.state.distance[i]} />
												</>
											);
										})}
									</Container>
								</div>
							</Draggable>
						);
					})}
				</Container>
			</div>
		);
	}

	getCardPayload(columnId, index) {
		return this.state.scene.children.filter((p) => p.id === columnId)[0]
			.children[index];
	}

	onColumnDrop(dropResult) {
		const scene = Object.assign({}, this.state.scene);
		scene.children = applyDrag(scene.children, dropResult);
		this.setState({
			scene,
		});
	}

	onCardDrop(columnId, dropResult) {
		if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
			const scene = Object.assign({}, this.state.scene);
			const column = scene.children.filter((p) => p.id === columnId)[0];
			const columnIndex = scene.children.indexOf(column);

			const newColumn = Object.assign({}, column);
			newColumn.children = applyDrag(newColumn.children, dropResult);
			scene.children.splice(columnIndex, 1, newColumn);

			const newDistance = updateDistance(newColumn.children);

			this.setState({
				scene,
				distance: newDistance,
			});
		}
	}
}

export default Cards;
