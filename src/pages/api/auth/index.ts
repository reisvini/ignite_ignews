import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
      { id: 1, name: "Ana" },
      { id: 2, name: "Vinicius" },
      { id: 3, name: "Bruna" },
      { id: 4, name: "Marcus" },
    ];

    return response.json(users);
}