export const applyDrag = (arr, dragResult) => {
  const { removedIndex, addedIndex, payload } = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;

  const result = [...arr];
  let itemToAdd = payload;

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }

  return result;
};

export const generateItems = (start, end, creator) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(creator(i));
  }
  return result;
};

export const newArray = (length, state) => {
  const res = [];
  for (let i = 0; i < length; i++) {
    res.push(state);
  }
  return res;
};

const R = Math.PI / 180;

const calcDistance = (lat1, lng1, lat2, lng2) => {
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

const calcWalkTime = (dis) => {
  const walkHour = Math.floor(dis / 4);
  const walkMinutes = Math.ceil(60 * ((dis / 4) - walkHour));
  let walkTime = '';
  if (walkHour == 0) {
    walkTime = String(walkMinutes) + '分';
  } else {
    walkTime = String(walkHour) + '時間' + String(walkMinutes) + '分'
  };
  return (walkTime);
};

export const updateDistance = (spots) => {
  console.log({ spots });
  const res = [];
  for (let i = 0; i < spots.length - 1; i++) {
    console.log(spots[i].data, spots[i + 1].data);
    const dis = calcDistance(
      spots[i].data.lat,
      spots[i].data.lng,
      spots[i + 1].data.lat,
      spots[i + 1].data.lng
    );
    const walkTime = calcWalkTime(dis);
    if(dis < 1){
      const formattedDistance = Math.round(dis * 1000);
      res.push(`距離 ${formattedDistance}m\n徒歩 ${walkTime}`);
    } else {
      const formattedDistance = Math.round(dis);
      res.push(`距離 ${formattedDistance}km\n徒歩 ${walkTime}`);
    }
  }
  return res;
};
