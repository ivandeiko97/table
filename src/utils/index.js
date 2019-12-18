export function sortTable(arr, sortVal, mode) {
  let sortArr = [...arr]
  switch (sortVal) {
    case 'HW':
      return sortArr.sort((el1, el2) =>  sortFunc(el1.hours_watched, el2.hours_watched, mode)) 
    case 'PV':
      return sortArr.sort((el1, el2) =>  sortFunc(el1.peak_viewers, el2.peak_viewers, mode)) 
    case 'ACCV':
      return sortArr.sort((el1, el2) =>  sortFunc(el1.avg_concurrent_viewers, el2.avg_concurrent_viewers, mode)) 
    case 'AT':
      return sortArr.sort((el1, el2) =>  sortFunc(el1.air_time, el2.air_time, mode)) 
    case 'VG':
      return sortArr.sort((el1, el2) =>  sortFunc(el1.views_gain, el2.views_gain, mode)) 
    case 'FG':
      return sortArr.sort((el1, el2) =>  sortFunc(el1.followers_gain, el2.followers_gain, mode)) 
    default:
      return;
  }
};

function sortFunc (elem1, elem2, sortMode) {
  return sortMode ? elem1.value - elem2.value : elem2.value - elem1.value;
}

export function getWidth(diferent) {
  let width = {};
  let diferentSum;

  if (diferent < 0) {
    width.black = -50 + diferent;
    diferentSum = 100 - Math.abs(width.black);
    width.color = diferentSum < 0 ? 0 : diferentSum;
    return width;
  } 
  width.color = 50 + diferent;
  diferentSum = 100 - width.color;
  width.black = diferentSum < 0 ? 0 : diferentSum;
  
  return width;
}