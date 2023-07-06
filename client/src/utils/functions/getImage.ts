import bikeImages from '../../data/bikeImages';

export const getImage = (val: string) => {
  const image = bikeImages.find((x) => x.color === val);
  console.log(val, image);

  if (image) {
    return image.image;
  } else return false;
};
