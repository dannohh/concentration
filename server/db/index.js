import client from './client';

const addScore = async (newScore) => {
  try {
    return await client
      .db('scores')
      .collection('scores')
      .insertOne(newScore);
  } catch (err) {
    throw new Error(err);
  }
};

export default addScore;
