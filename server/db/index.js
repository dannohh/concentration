import client from './client';

export const addScore = async (newScore) => {
  try {
    return await client
      .db('scores')
      .collection('scores')
      .insertOne(newScore);
  } catch (err) {
    throw new Error(err);
  }
};

export const getScores = async () => {
  try {
    return await client.db('scores').collection('scores').find().toArray();
  } catch (err) {
    throw new Error(err);
  }
};
