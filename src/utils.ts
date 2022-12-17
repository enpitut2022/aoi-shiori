import { Spot } from './data';

const R = Math.PI / 180;

const calcDistance = (
	lat1: number,
	lng1: number,
	lat2: number,
	lng2: number
): number => {
	lat1 *= R;
	lng1 *= R;
	lat2 *= R;
	lng2 *= R;
	return (
		6371 *
		Math.acos(
			Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1) +
				Math.sin(lat1) * Math.sin(lat2)
		)
	);
};

const calcWalkTime = (dis: number): string => {
	const walkHour = Math.floor(dis / 4);
	const walkMinutes = Math.ceil(60 * (dis / 4 - walkHour));
	let walkTime = '';
	if (walkHour == 0) {
		walkTime = String(walkMinutes) + '分';
	} else {
		walkTime = String(walkHour) + '時間' + String(walkMinutes) + '分';
	}
	return walkTime;
};

export const updateDistance = (spots: Spot[]) => {
	const res = [];
	for (let i = 0; i < spots.length - 1; i++) {
		const dis = calcDistance(
			spots[i].lat,
			spots[i].lng,
			spots[i + 1].lat,
			spots[i + 1].lng
		);
		const walkTime = calcWalkTime(dis);
		if (dis < 1) {
			const formattedDistance = Math.round(dis * 1000);
			res.push(`距離 ${formattedDistance}m\n徒歩 ${walkTime}`);
		} else {
			const formattedDistance = Math.round(dis);
			res.push(`距離 ${formattedDistance}km\n徒歩 ${walkTime}`);
		}
	}
	return res;
};
